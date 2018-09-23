import React, {Component} from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import UserIndex from '../components/user-index';

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
      <div>
        <UserIndex users={this.state.users} />
      </div>
    );
  }
}

export default Users;
