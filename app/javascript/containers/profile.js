import React, {Component} from "react";
import UserProfile from '../components/user-profile';
import InterestIndex from '../components/interest-index';
import MembershipIndex from '../components/membership-index';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interests: [],
      memberships: [],
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

    fetch('/api/v1/users/user_memberships/' + this.state.profile.id)
    .then(response => response.json())
    .then((data) => {this.setState({memberships:data})
    })
  };

  render () {
    return (
      <div>
        <UserProfile profile={this.state.profile} />
        <InterestIndex interests={this.state.interests} />
        <MembershipIndex memberships={this.state.memberships} />
      </div>
    );
  }
}

export default Profile;
