import React, { Component } from 'react';
import User from './user';

 class UserIndex extends Component {
  render(){
    return this.props.users.map((user,index) => (
      <User
        key={index}
        {...user}
      />
    ))
  }
}
 export default UserIndex
