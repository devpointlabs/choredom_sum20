import React from 'react';
import { Container, Button, Modal, Grid } from 'semantic-ui-react';
import UserRewards from '../rewards/UserRewards'



const Spend = () => (
  <>
    <h1>Spend Points</h1>
    <p> Spend points on rewards </p>
      <Container>
        < UserRewards />
      </Container>
  </>
       
    

  )
export default Spend;