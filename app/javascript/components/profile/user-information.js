import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

class UserInformation extends Component {
  render() {
    return(
      <div className='user-profile'>
        <Segment>
          <p id='user-name'>{this.props.userInfo.first_name} {this.props.userInfo.last_name}</p>
          <p id='user-email'>{this.props.userInfo.email}</p>
          <p id='user-height-weight'>{this.props.userInfo.height_feet}'{this.props.userInfo.height_inches} {this.props.userInfo.weight}</p>
        </Segment>
      </div>
    )
  }
}

export default UserInformation
