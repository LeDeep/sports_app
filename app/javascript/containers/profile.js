import React, {Component} from "react";
import UserInformation from '../components/profile/user-information';
import InterestIndex from '../components/profile/interest-index';
import MembershipIndex from '../components/profile/membership-index';
import UserInformationHeader from '../components/presentation/user-information-header';
import UserInterestsHeader from '../components/presentation/user-interests-header';
import UserTeamsHeader from '../components/presentation/user-teams-header';
import UserProfileHeader from '../components/presentation/user-profile-header';
import EditSportsSelections from '../components/sports/edit-sports-selections';
import { Grid, Header, Divider, Container, Button } from 'semantic-ui-react';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sports: [],
      interests: [],
      memberships: [],
      userInfo: [],
      profile: {
        id: this.props.match.params.id
      },
      editable: false,
      sportId: null
    };
  };

  editableToggle = () => {
    this.setState({editable: !this.state.editable})
  };

  handleInterestEdit = () => {
    this.editableToggle()
  };

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

    fetch('/api/v1/sports.json').then(response => response.json())
    .then((data) => {this.setState({sports:data})
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

  handleInterestUpdate = (interests) => {
    for(var i = 0; i < interests.length; i++) {
      for(var i = 0; i < this.state.sports.length; i++) {
        if(interests.includes(this.state.sports[i].name)) {
          this.state.sportId = this.state.sports[i].id
        }
      }
    }
    fetch('/api/v1/users/add_interests/' + this.state.profile.id + '/sport/' + this.state.sportId, {
      method: 'POST',
      body: JSON.stringify({interests}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      this.updateInterest(interests)
    })
  };

  updateInterest = (interests) => {
    fetch('/api/v1/users/user_interests/' + this.state.profile.id).then(resp => resp.json()).then(data => {
      this.setState({interests:data})
    })
  }

  render () {
    const buttonText = (
      this.state.editable ? 'Save' : 'Edit'
    )

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
              {this.state.editable ? <EditSportsSelections sports={this.state.sports} handleInterestUpdate={this.handleInterestUpdate} />: <InterestIndex interests={this.state.interests} />}
              <Button onClick={() => this.handleInterestEdit()}>{buttonText}</Button>
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
