import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

 class NewUserForm extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      height_feet: '',
      height_inches: '',
      weight: '',
      redirect: false
    }
  }

  handleFirstName = (e) => {
    this.setState({
      first_name: e.target.value
    });
  }

  handleLastName = (e) => {
    this.setState({
      last_name: e.target.value
    });
  }

  handleEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  handleHeightFeet = (e) => {
    this.setState({
      height_feet: e.target.value
    });
  }

  handleHeightInches = (e) => {
    this.setState({
      height_inches: e.target.value
    });
  }

  handleWeight = (e) => {
    this.setState({
      weight: e.target.value
    });
  }

   addUser = () => {
    let user = {first_name: this.state.first_name, last_name: this.state.last_name, email: this.state.email, height_feet: this.state.height_feet, height_inches: this.state.height_inches, weight: this.state.weight}
    this.props.handleNewUser(user)
    this.setState({redirect: true})
  }

  render(){
    if(this.state.redirect) {
      return (
        <Redirect to="/" />
      )
    }
    return (
      <div>
        <h3>Complete the information below to create your profile.</h3>
        <Form>
          <Form.Input label="First Name" type="text" value={this.state.first_name} onChange={this.handleFirstName} placeholder='First Name...' />
          <Form.Input label="Last Name" type="text" value={this.state.last_name} onChange={this.handleLastName} placeholder='Last Name...' />
          <Form.Input label="Email" type="email" value={this.state.email} onChange={this.handleEmail} placeholder='Email address...' />
          <Form.Input label="Height in Feet" type="number" value={this.state.height_feet} onChange={this.handleHeightFeet} placeholder='Height in Feet...' />
          <Form.Input label="Height in Inches" type="number" value={this.state.height_inches} onChange={this.handleHeightInches} placeholder='Height in Inches...' />
          <Form.Input label="Weight" type="number" value={this.state.weight} onChange={this.handleWeight} placeholder='Weight...' />
          <Button onClick={this.addUser}>Submit</Button>
          </Form>
      </div>
    )
  }
}

export default NewUserForm
