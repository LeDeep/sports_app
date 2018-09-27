import React, { Component } from 'react';
import { Button, Form, Dropdown } from 'semantic-ui-react'

 class EditTeamsSelections extends Component {
   handleMultiChange = (e, {value}) => {
     this.props.handleMembershipUpdate(value)
   }

  render(){
    var options = [];
    this.props.teams.map(function(team,index) {
      return options.push({key: index, text: team.name, value: team.name})
    })

    return (
      <Form>
        <Form.Dropdown
          placeholder="Select Teams"
          fluid multiple selection
          options={options}
          onChange={this.handleMultiChange}
          />
      </Form>
    )
  }
}

export default EditTeamsSelections
