import React from 'react';
import { Container, Button, Modal, Grid, Header, Card } from 'semantic-ui-react';
import UserRewards from '../rewards/UserRewards';
import UserTasks from '../tasks/UserTasks'
import { AuthConsumer } from '../../providers/AuthProvider';
import Fams from '../fams/Fams';
import { RewardConsumer } from '../../providers/RewardProvider';
import axios from 'axios';
import ClaimedReward from '../rewards/ClaimedReward'

class UserDash extends React.Component {
  
  componentDidMount() {
      this.props.getAllRewards(this.props.user.id)
  }

  render() {
    const { points } = this.props.user
    return (
      <>
        <h1>My Points</h1>
        <p>{ Number(points) }</p>
      <div>
            {this.props.rewards.map( r => r.reward_claimed ? <ClaimedReward {...r} usedReward={this.props.useReward}/> : "" )}
        </div>
      </>
    )
  }
}

const RewardUserDash = (props) => (
  <RewardConsumer>
    {
       values => (
      <UserDash {...props} {...values} />
    )}
  </RewardConsumer>
)

const ConnectedUserDash = (props) => (
  <AuthConsumer>
    {
       values => (
      <RewardUserDash {...props} {...values} />
    )}
  </AuthConsumer>
)

export default ConnectedUserDash;