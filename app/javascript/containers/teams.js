import React, {Component} from "react";
import TeamIndex from '../components/teams/team-index';
import { Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class Teams extends Component {
  constructor() {
    super();
    this.state = {
      teams:[]
    }
  }

  componentDidMount() {
    fetch('/api/v1/teams.json').then(response => response.json())
    .then((data) => {this.setState({teams:data})
    })
  };

  render () {
    return (
      <TeamIndex teams={this.state.teams} />
    );
  }
}

export default Teams;
