import React, { Component } from 'react';
import { RewardConsumer } from '../../providers/RewardProvider';
import { Button } from 'semantic-ui-react';

class UserRewardShow extends Component {
  state = { editing: false }

  toggleUpdate = () => this.setState({ editing: !this.state.editing })

  render() {
    const { user_id, id, reward_name, reward_description, reward_cost, reward_claimed, reward_used } = this.props.location.state;
    const { updateReward, deleteReward, claimReward, history } = this.props;
    return(
      <>
        <h1>{reward_name}</h1>
        <h1>{reward_description}</h1>
        <h1>{reward_cost}</h1>
        {
          reward_claimed ? 
            <p>claimed</p>
          :
            <Button onClick={ () => claimReward(user_id, id, history) }>Claim Reward</Button>
        }
      </>
    )
  }
}

const ConnectedRewardShow = (props) => (
  <RewardConsumer>
    { value => (
      <UserRewardShow 
        {...props}
        {...value}
      />
    )}
  </RewardConsumer>
)

export default ConnectedRewardShow;