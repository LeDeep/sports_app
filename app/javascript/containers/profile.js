import React, {Component} from "react";
import UserProfile from '../components/user-profile';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        id: this.props.match.params.id
      }
    }
  }

  componentDidMount() {
    fetch('/api/v1/users/' + this.state.profile.id).then(response => response.json())
    .then((data) => {this.setState({profile:data})
    })
  };

  render () {
    return (
      <div>
        <UserProfile profile={this.state.profile} />
      </div>
    );
  }
}

export default Profile;
