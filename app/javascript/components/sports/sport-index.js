import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react'

 class SportIndex extends Component {
  render(){
    var options = [];
    this.props.sports.map(function(sport,index) {
      return options.push({key: index, text: sport.name, value: sport.name})
    })
    return (
      <Dropdown placeholder="Sports" fluid multiple selection options={options} />
    )
  }
}

 export default SportIndex
