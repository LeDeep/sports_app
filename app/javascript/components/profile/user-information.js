import React, { Component } from 'react';
import { Form, Button, Segment } from 'semantic-ui-react';

class UserInformation extends Component {
  constructor() {
    super()
    this.state = {
      editable: false,
    }
  }

  editableToggle = () => {
    this.setState({editable: !this.state.editable})
  }

  handleEdit = () => {
    if(this.state.editable) {
      let id = this.props.userInfo.id
      let first_name = this.first_name.value
      let last_name = this.last_name.value
      let email = this.email.value
      let height_feet = this.height_feet.value
      let height_inches = this.height_inches.value
      let weight = this.weight.value
      let user = {id: id, first_name: first_name, last_name: last_name, email: email, height_feet: height_feet, height_inches: height_inches, weight: weight}
      this.props.handleUserUpdate(user)
    }
    this.editableToggle();
  }

  render() {
    const buttonText = (
      this.state.editable ? 'Save' : 'Edit'
    )

    const showUserInformation = (
      <div className='user-profile'>
        <Segment>
          <p id='user-name'>{this.props.userInfo.first_name} {this.props.userInfo.last_name}</p>
          <p id='user-email'>{this.props.userInfo.email}</p>
          <p id='user-height-weight'>{this.props.userInfo.height_feet}'{this.props.userInfo.height_inches} {this.props.userInfo.weight}</p>
        </Segment>
      </div>
    )

    const editUserInformation = (
      <Form>
        <input label="First Name" type="text" ref={input => this.first_name = input} defaultValue={this.props.userInfo.first_name}  />
        <input label="Last Name" type="text" ref={input => this.last_name = input} defaultValue={this.props.userInfo.last_name}  />
        <input label="Email" type="email" ref={input => this.email = input} defaultValue={this.props.userInfo.email}  />
        <input label="Height in Feet" type="number" ref={input => this.height_feet = input} defaultValue={this.props.userInfo.height_feet}  />
        <input label="Height in Inches" type="number" ref={input => this.height_inches = input} defaultValue={this.props.userInfo.height_inches}  />
        <input label="Weight" type="number" ref={input => this.weight = input} defaultValue={this.props.userInfo.weight}  />
      </Form>
    )

    return(
      <div>
        {this.state.editable ? editUserInformation : showUserInformation}
        <Button onClick={() => this.handleEdit()}>{buttonText}</Button>
      </div>
    )
  }
}

export default UserInformation
