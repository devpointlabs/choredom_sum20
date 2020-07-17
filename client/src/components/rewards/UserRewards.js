//This becomes the Manage Reward page
import React from 'react';
import { RewardConsumer } from '../../providers/RewardProvider';
import UserRewardList from './UserRewardList';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Button, Modal, Card } from 'semantic-ui-react';

class UserRewards extends React.Component {
  componentDidMount() {
    this.props.getAllRewards(this.props.user.id)
  }
  render() {
    const {rewards, user} = this.props

    return (
      <>
  
     
          {
            rewards ? 
              <UserRewardList user={user} rewards={rewards} />
              : <p>No Rewards</p>
          }
 
      </>
    )
  }
}
const ConnectedRewards = (props) => (
  <RewardConsumer>
    {
      values => (
        <UserRewards {...props} {...values} />
      )
    }
  </RewardConsumer>
)
const MegaRewards = (props) => (
  <AuthConsumer>
    {
      values => <ConnectedRewards {...props} {...values} />
    }
  </AuthConsumer>
)
export default MegaRewards;