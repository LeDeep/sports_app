import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'

class UserInterestsHeader extends Component {
  render() {
    return(
      <div className='user-interests-header'>
        <Header size='medium'>{this.props.userInfo.first_name}'s Interests</Header>
      </div>
    )
  }
}

export default UserInterestsHeader
