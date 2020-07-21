import React, { Component } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';

class Points extends Component {
  componentDidMount() {
    const { userPoints, user } = this.props
    userPoints(user.id)
  }
  
  render () {
    const { fams, addFam, user } = this.props
    return (
      <>
        <FamList fams={fams} />
          <Modal trigger={<Button>Start a new family group</Button>} centered={false}>
            <Modal.Header>New Family Group</Modal.Header>
            <Modal.Content>
              <FamForm addFam={addFam} userId={user.id} />
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

export default ConnectedFams;

