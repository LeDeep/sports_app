import React, { Component } from 'react';
import { Button, Form, Dropdown } from 'semantic-ui-react'

 class EditSportsSelections extends Component {
   handleMultiChange = (e, {value}) => {
     this.props.handleInterestUpdate(value)
   }

  render(){
    var options = [];
    this.props.sports.map(function(sport,index) {
      return options.push({key: index, text: sport.name, value: sport.name})
    })

    return (
      <Form>
        <Form.Dropdown
          placeholder="Select Sports"
          fluid multiple selection
          options={options}
          onChange={this.handleMultiChange}
          />
      </Form>
    )
  }
}

 export default EditSportsSelections
