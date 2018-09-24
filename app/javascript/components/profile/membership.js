import React, { Component } from 'react';

class Membership extends Component {
  render() {
    return(
      <div className='membership-index'>
        <p id='team-name'>{this.props.name}</p>
      </div>
    )
  }
}

export default Membership
