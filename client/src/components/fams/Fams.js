import React, { Component } from 'react';
import { FamConsumer } from '../../providers/FamProvider';
import FamForm from './FamForm';
import FamList from './FamList';
import { Button, Modal, Grid } from 'semantic-ui-react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { withRouter } from  'react-router-dom';

class Fams extends Component {
  componentDidMount() {
    const { getAllFams, user } = this.props
    getAllFams(user.id)
  }
  
  render () {
    const { fams, addFam, user, history } = this.props
    return (
      <>
        <FamList fams={fams} />
          <Modal trigger={<Button>Start a new family group</Button>} centered={false}>
            <Modal.Header>New Family Group</Modal.Header>
            <Modal.Content>
              <FamForm addFam={addFam} userId={user.id} history={history}/>
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