import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

class Membership extends Component {
  render() {
    return(
      <div className='membership-index'>
        <Segment>
          <p id='team-name'>{this.props.name}</p>
        </Segment>
      </div>
    )
  }
}

export default Membership
