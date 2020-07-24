import React from 'react';
import { Container, Button, Modal, Grid } from 'semantic-ui-react';
import UserRewards from '../rewards/UserRewards'
import {Header} from 'semantic-ui-react'
import styled from 'styledComp';

const Container = styled.div`
  background: linear-gradient(to top right, blue, gold);
`
<Segment basic>

const Transparent = styled.div`
  background: transparent !important;
`
<Segment as={Transparent}>

const HeaderText = styled.h1`
  color: black !important;
  text-align: center;
  width: 150px;
  white-space nowrap;
  overflow: hidden;
  text-overflow: clip;
`

const Spend = () => (
  <>
  <div>
    <h1 textAlign = "center"> Spend Points</h1>
  <Segment>
    <p textAlign="center"> Spend points on rewards </p>
    <Container>
      <UserRewards />
    </Container>
  </Segment>
  </>
  </div>
)

export default Spend;
