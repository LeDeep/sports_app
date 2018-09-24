import React, {Component} from "react";
import UserProfile from '../components/user-profile';
import InterestIndex from '../components/interest-index';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interests: [],
      profile: {
        id: this.props.match.params.id
      }
    }
  }

  componentDidMount() {
    fetch('/api/v1/users/' + this.state.profile.id).then(response => response.json())
    .then((data) => {this.setState({profile:data})
    })

    fetch('/api/v1/users/user_interests/' + this.state.profile.id)
    .then(response => response.json())
    .then((data) => {this.setState({interests:data})
    })
  };

  render () {
    return (
      <div>
        <UserProfile profile={this.state.profile} />
        <InterestIndex interests={this.state.interests} />
      </div>
    );
  }
}

export default Profile;
