import React, {Component} from "react";
import UserIndex from '../components/users/user-index';
import { Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom'



class Users extends Component {
  constructor() {
    super();
    this.state = {
      users:[]
    }
  }

  componentDidMount() {
    fetch('/api/v1/users.json').then(response => response.json())
    .then((data) => {this.setState({users:data})
    })
  };

  render () {
    return (
      <Container>
        <h3>Here is our current roster of athletes.</h3>
        <h4>Create your <Link to='/users/new'>profile</Link> to add your name to the list!</h4>
        <UserIndex users={this.state.users} />
      </Container>
    );
  }
}

export default Users;
