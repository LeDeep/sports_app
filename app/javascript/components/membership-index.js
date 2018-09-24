import React, { Component } from 'react';
import Membership from './membership';

 class MembershipIndex extends Component {
  render(){
    return this.props.memberships.map((membership,index) => (
      <Membership
        key={index}
        {...membership}
      />
    ))
  }
}
 export default MembershipIndex
