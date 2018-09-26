import React, {Component} from "react";
import NewUserForm from '../components/profile/new-user-form';
import { Container } from 'semantic-ui-react';

class AddUser extends Component {
  constructor() {
    super();
    this.state = {
      users:[]
    }
  }

  handleNewUser = (user) => {
  fetch('/api/v1/users', {
    method: 'POST',
    body: JSON.stringify({user}),
    headers: {
      'Content-Type': 'application/json'
    }
    }).then(response => response.json())
    .then(data => {
      this.addNewUser(data)
    })
  }
  
   addNewUser = (user) => {
    this.setState({
      users: this.state.users.concat(user)
    })
  }

  render () {
    return (
      <Container>
        <NewUserForm handleNewUser={this.handleNewUser} />
      </Container>
    );
  }
}

export default AddUser;
