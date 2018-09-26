import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Segment } from 'semantic-ui-react';


class User extends Component {
  render() {
    var profileUrl = '/profile/' + this.props.id
    return(
      <div className='user-index'>
        <Segment>
          <p id='user-name'><Link to={profileUrl}>{this.props.first_name} {this.props.last_name}</Link></p>
        </Segment>
      </div>
    )
  }
}

export default User
