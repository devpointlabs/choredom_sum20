import React, { Component } from 'react';
import { FamConsumer } from '../../providers/FamProvider';
import FamForm from './FamForm';
import FamList from './FamList';
import { Button, Modal, Grid } from 'semantic-ui-react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { withRouter } from  'react-router-dom';

class Fams extends Component {
  state = { modalopen: false, }
  
  componentDidMount() {
    const { getAllFams, user } = this.props
    getAllFams(user.id)
  }
  
  open = () => this.setState({ modalopen: true })
  close = () => this.setState({ modalopen: false })

  render () {
    const { fams, addFam, user, history } = this.props
    const { modalopen } = this.state
    return (
      <>
        <FamList fams={fams} />
          <Modal trigger={<Button onClick={() => this.open()}>Start a new family group</Button>} centered={false} open={modalopen} onClose={this.close}>
            <Modal.Header>New Family Group</Modal.Header>
            <Modal.Content>
              <FamForm addFam={addFam} userId={user.id} history={history} close={this.close}/>
            </Modal.Content>
          </Modal>
      </>
    )
  }
}

const SecondaryFams = (props) => (
  <FamConsumer>
    {
      values => (
        <Fams {...props} { ...values }/>
      )
    }
  </FamConsumer>
)

const ConnectedFams = ( props ) => (
  < AuthConsumer>
    { values => (
      <SecondaryFams {...props} { ...values }/>
    )
     }
  </AuthConsumer>
)

export default withRouter(ConnectedFams);