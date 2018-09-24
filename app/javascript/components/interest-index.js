import React, { Component } from 'react';
import Interest from './interest';

 class InterestIndex extends Component {
  render(){
    return this.props.interests.map((interest,index) => (
      <Interest
        key={index}
        {...interest}
      />
    ))
  }
}
 export default InterestIndex
