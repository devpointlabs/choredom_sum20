
import React from 'react';
import { RewardConsumer } from '../../providers/RewardProvider';
import RewardForm from './RewardForm';
import RewardList from './RewardList';
import { AuthConsumer } from '../../providers/AuthProvider';

class Rewards extends React.Component {

  componentDidMount() {
    this.props.getAllRewards(this.props.user.id)
  }

  render() {
    {/* didnt have user being passed down as a prop */}
    const {addReward, rewards, user} = this.props
    return (
      <>
       <h1>Rewards</h1>
          <RewardForm addReward={addReward} user_id={user.id} />
          {
            rewards ? 
              <RewardList user={user} rewards={rewards} />
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
        <Rewards {...props} {...values} />
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