import React, { Component } from 'react';
import { RewardConsumer } from '../../providers/RewardProvider';
import { Button } from 'semantic-ui-react';
import RewardForm from './RewardForm';

class RewardShow extends Component {
  state = { editing: false }

  toggleUpdate = () => this.setState({ editing: !this.state.editing })

  render() {
    const { id, reward_name, reward_description, reward_cost, reward_claimed, reward_used } = this.props.location.state
    const { editing } = this.state
    const { updateReward, deleteReward, history } = this.props
    return(
      <>
        <h1>{reward_name}</h1>
        <h1>{reward_description}</h1>
        <h1>{reward_cost}</h1>
        <h1>{reward_claimed}</h1>
        <h1>{reward_used}</h1>
        { editing ?
            <RewardForm 
              id={id}
              rewardName={reward_name}
              rewardDescription={reward_description}
              rewardCost={reward_cost}
              rewardClaimed={reward_claimed}
              rewardUsed={reward_used}
              updateReward={updateReward}
              toggleUpdate={this.toggleUpdate}
              history={history}
            />
          :
          <Button onClick={this.toggleUpdate}>
            Edit
          </Button>
        }
        <Button onClick={() => deleteReward(id, history)}>
          Delete
        </Button>
      </>
    )
  }
}

const ConnectedRewardShow = (props) => (
  <RewardConsumer>
    { value => (
      <RewardShow 
        {...props} 
        updateReward={value.updateReward} 
        deleteReward={value.deleteReward}
      />
    )}
  </RewardConsumer>
)

export default ConnectedRewardShow;