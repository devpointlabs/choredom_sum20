import React from 'react';
import { RewardConsumer } from '../../providers/RewardProvider';
import UserRewardList from './UserRewardList';
import { AuthConsumer } from '../../providers/AuthProvider';

class UserRewards extends React.Component {
  componentDidMount() {
    this.props.getAllRewards(this.props.user.id)
    }
  render() {
    const {rewards, user, claimReward, subPoints, history} = this.props

    return (
      <>
        {
          rewards ? 
            <UserRewardList user={user} rewards={rewards} subPoints={subPoints} claimReward={claimReward} history={history} />
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