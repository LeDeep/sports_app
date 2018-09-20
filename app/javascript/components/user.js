import React, { Component } from 'react';

class User extends Component {
  render() {
    return(
      <div className='user-index'>
        <p id='user-name'>{this.props.first_name} {this.props.last_name}</p>
        <p id='user-email'>{this.props.email}</p>
        <p id='user-height-weight'>{this.props.height_feet}'{this.props.height_inches} {this.props.weight}</p>
      </div>
    )
  }
}

export default User
