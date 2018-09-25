import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'

class UserProfileHeader extends Component {
  render() {
    return(
      <div className='user-profile-header'>
        <Header size='large'>{this.props.userInfo.first_name} {this.props.userInfo.last_name}'s Profile</Header>
      </div>
    )
  }
}

export default UserProfileHeader
