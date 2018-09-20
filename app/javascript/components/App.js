import React, {Component} from "react";
import UserIndex from './user-index';

var userData = [
  {name: 'Aaron Rodgers'},
  {name: 'Drew Brees'},
  {name: 'Philip Rivers'},
  {name: 'Matthew Stafford'}
]

class App extends Component {
  constructor() {
    super();
    this.state = {
      users:[]
    }
  }

  componentDidMount() {
    this.setState({
      users: userData
    });
  };

  render () {
    return (
      <div>
        <p>Sport Up Inc.</p>
        <UserIndex users={this.state.users} />
      </div>
    );
  }
}

export default App;
