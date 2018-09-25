import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class User extends Component {
  render() {
    var profileUrl = '/profile/' + this.props.id
    return(
      <div className='user-index'>
        <p id='user-name'><Link to={profileUrl}>{this.props.first_name} {this.props.last_name}</Link></p>
      </div>
    )
  }
}

export default User
