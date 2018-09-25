import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'

class UserInformationHeader extends Component {
  render() {
    return(
      <div className='user-information-header'>
        <Header size='medium'>{this.props.userInfo.first_name}'s Information</Header>
      </div>
    )
  }
}

export default UserInformationHeader
