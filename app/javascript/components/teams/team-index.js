import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react'

 class TeamIndex extends Component {
  render(){
    var options = [];
    this.props.teams.map(function(team,index) {
      return options.push({key: index, text: team.name, value: team.name})
    })
    return (
      <Dropdown placeholder="Teams" fluid multiple selection options={options} />
    )
  }
}

 export default TeamIndex
