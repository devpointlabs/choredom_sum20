import React from 'react';
import { Container, Button, Modal, Grid, Segment } from 'semantic-ui-react';
import UserRewards from '../rewards/UserRewards'
import { HeaderText, PText } from '../styledComp/SpendStyles';
const Spend = () => (
  <>
    <br/>
    <HeaderText>Spend Points</HeaderText>
      <PText>Spend points on rewards</PText>
      <Container>
        < UserRewards />
      </Container>
  </>
)
export default Spend;
