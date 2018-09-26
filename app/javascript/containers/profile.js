import React, {Component} from "react";
import UserInformation from '../components/profile/user-information';
import InterestIndex from '../components/profile/interest-index';
import MembershipIndex from '../components/profile/membership-index';
import UserInformationHeader from '../components/presentation/user-information-header';
import UserInterestsHeader from '../components/presentation/user-interests-header';
import UserTeamsHeader from '../components/presentation/user-teams-header';
import UserProfileHeader from '../components/presentation/user-profile-header';
import { Grid, Header, Divider, Container } from 'semantic-ui-react';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interests: [],
      memberships: [],
      userInfo: [],
      profile: {
        id: this.props.match.params.id
      }
    }
  }

  componentDidMount() {
    fetch('/api/v1/users/' + this.state.profile.id)
    .then(response => response.json())
    .then((data) => {this.setState({userInfo:data})
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

  handleUserUpdate = (user) => {
    fetch('/api/v1/users/' + user.id, {
      method: 'PUT',
      body: JSON.stringify({user}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      this.updateUser(user)
    })
  }

  updateUser = (user) => {
    fetch('/api/v1/users/' + user.id).then(resp => resp.json()).then(data => {
      this.setState({userInfo:data})
    })
  }

  render () {
    return (
      <Container>
        <UserProfileHeader userInfo={this.state.userInfo} />
        <Divider />
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              <UserInformationHeader userInfo={this.state.userInfo} />
              <UserInformation userInfo={this.state.userInfo} handleUserUpdate={this.handleUserUpdate} />
            </Grid.Column>
            <Grid.Column>
              <UserInterestsHeader userInfo={this.state.userInfo} />
              <InterestIndex interests={this.state.interests} />
            </Grid.Column>
            <Grid.Column>
              <UserTeamsHeader userInfo={this.state.userInfo} />
              <MembershipIndex memberships={this.state.memberships} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider />
      </Container>
    );
  }
}

export default Profile;
