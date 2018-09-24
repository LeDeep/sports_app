import React, {Component} from "react";
import UserIndex from '../components/users/user-index';

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
