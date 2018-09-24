import React, { Component } from 'react';

class UserProfile extends Component {
  render() {
    return(
      <div className='user-profile'>
        <p id='user-name'>{this.props.profile.first_name} {this.props.profile.last_name}</p>
        <p id='user-email'>{this.props.profile.email}</p>
        <p id='user-height-weight'>{this.props.profile.height_feet}'{this.props.profile.height_inches} {this.props.profile.weight}</p>
      </div>
    )
  }
}

export default UserProfile
