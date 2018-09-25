import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'

class UserTeamsHeader extends Component {
  render() {
    return(
      <div className='user-teams-header'>
        <Header size='medium'>{this.props.userInfo.first_name}'s Teams</Header>
      </div>
    )
  }
}

export default UserTeamsHeader
