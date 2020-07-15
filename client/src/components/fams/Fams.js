import React from 'react';
import { FamConsumer } from '../../providers/FamProvider';
import FamForm from './FamForm';
import FamList from './FamList';
import { Button, Modal } from 'semantic-ui-react';
import { AuthConsumer } from '../../providers/AuthProvider';

const Fams = ({user}) => (
  <FamConsumer>
    {
      value => (
        <>
          <FamList fams={value.fams} />
          <Modal trigger={<Button>Start a new family group</Button>} centered={false}>
            <Modal.Header>New Family Group</Modal.Header>
            <Modal.Content>
              <FamForm addFam={value.addFam} userId={user.id} />
            </Modal.Content>
          </Modal>
        </>
      )
    }
  </FamConsumer>
) 

const ConnectedFams = ( props ) => (
  < AuthConsumer>
    { values => (
      <Fams {...props} { ...values }/>
    )
     }
  </AuthConsumer>
)

export default ConnectedFams;