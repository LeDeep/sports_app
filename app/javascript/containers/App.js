import React, {Component} from "react";
import Header from '../components/presentation/header';
import Footer from '../components/presentation/footer';
import Users from './users';
import Profile from './profile';
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render () {
    return (
      <div>
        <Header />
          <BrowserRouter>
            <div>
              <Route exact path="/" component={Users} />
              <Route exact path="/profile/:id" component={Profile} />
            </div>
          </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
