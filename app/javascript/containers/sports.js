import React, {Component} from "react";
import SportIndex from '../components/sports/sport-index';
import { Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class Sports extends Component {
  constructor() {
    super();
    this.state = {
      sports:[]
    }
  }

  componentDidMount() {
    fetch('/api/v1/sports.json').then(response => response.json())
    .then((data) => {this.setState({sports:data})
    })
  };

  render () {
    return (
      <SportIndex sports={this.state.sports} />
    );
  }
}

export default Sports;
