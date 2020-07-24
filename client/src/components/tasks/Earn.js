import React from 'react';
import { Container, Button, Modal, Grid } from 'semantic-ui-react';
import UserTasks from '../tasks/UserTasks'

const Earn = () => (
  <>
    <h1>Earn Points</h1>
    <p> Complete tasks to earn points </p>
      <Container>
        < UserTasks />
      </Container>
  </>
       
    
  )
export default Earn;