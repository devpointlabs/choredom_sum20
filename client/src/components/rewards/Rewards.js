//This becomes the Manage Reward page
import React from 'react';
import { RewardConsumer } from '../../providers/RewardProvider';
import RewardForm from './RewardForm';
import RewardList from './RewardList';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Button, Modal } from 'semantic-ui-react';

class Rewards extends React.Component {
  componentDidMount() {
    this.props.getAllRewards(this.props.user.id)
  }
  render() {
    const {addReward, rewards, user} = this.props
    return (
      <>
       <h1>Rewards</h1>
        <Modal trigger={<Button>Create Reward</Button>} centered={false}>
              <Modal.Header>Create New Reward</Modal.Header>
              <Modal.Content>
                <RewardForm addReward={addReward} user_id={user.id} />  
              </Modal.Content>
            </Modal>
          <br/>
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