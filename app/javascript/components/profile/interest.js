import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFootballBall, faBasketballBall, faFutbol, faBaseballBall, faHockeyPuck, faBicycle, faQuidditch } from '@fortawesome/free-solid-svg-icons'
import { Segment, Header } from 'semantic-ui-react';

library.add(fab, faFootballBall, faBasketballBall, faFutbol, faBaseballBall, faHockeyPuck, faBicycle, faQuidditch)

class Interest extends Component {
  render() {
    return(
      <div className='interest-index'>
        <Segment>
          <FontAwesomeIcon icon={this.props.icon} />
          <p id='sport-name'>{this.props.name}</p>
        </Segment>
      </div>
    )
  }
}

export default Interest
