//This becomes the Manage Reward page
import React from 'react';
import { RewardConsumer } from '../../providers/RewardProvider';
import RewardForm from './RewardForm';
import RewardList from './RewardList';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Button, Modal } from 'semantic-ui-react';

class Rewards extends React.Component {
  state = { modalopen: false, }
  componentDidMount() {
    this.props.getAllRewards(this.props.user.id)
  }

  open = () => this.setState({ modalopen: true })
  close = () => this.setState({ modalopen: false })

  render() {
    const {addReward, rewards, user} = this.props
    const { modalopen } = this.state
    return (
      <>
       <h1>Rewards</h1>
        <Modal trigger={<Button onClick={() => this.open()}>Create Reward</Button>} centered={false} open={modalopen} onClose={this.close}>
              <Modal.Header>Create New Reward</Modal.Header>
              <Modal.Content>
                <RewardForm addReward={addReward} user_id={user.id} close={this.close}/>  
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