import React, {Component} from "react";
import PageHeader from '../components/presentation/page-header';
import Footer from '../components/presentation/footer';
import Users from './users';
import Profile from './profile';
import AddUser from './add-user';
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render () {
    return (
      <div>
        <PageHeader />
          <BrowserRouter>
            <div>
              <Route exact path="/" component={Users} />
              <Route exact path="/profile/:id" component={Profile} />
              <Route exact path="/users/new" component={AddUser} />
            </div>
          </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
