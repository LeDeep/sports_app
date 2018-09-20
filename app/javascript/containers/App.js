import React, {Component} from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import UserIndex from '../components/user-index';

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
        <Header />
        <UserIndex users={this.state.users} />
        <Footer />
      </div>
    );
  }
}

export default App;
