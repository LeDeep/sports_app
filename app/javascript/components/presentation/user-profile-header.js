import React, { Component } from 'react';
import { Header, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";


class UserProfileHeader extends Component {
  render() {
    return(
      <div className='user-profile-header'>
        <Button><Link to='/'>Home</Link></Button>
        <Header size='large'>{this.props.userInfo.first_name} {this.props.userInfo.last_name}'s Profile</Header>
      </div>
    )
  }
}

export default UserProfileHeader
