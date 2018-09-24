import React, { Component } from 'react';

class Interest extends Component {
  render() {
    return(
      <div className='interest-index'>
        <p id='sport-name'>{this.props.name}</p>
      </div>
    )
  }
}

export default Interest
