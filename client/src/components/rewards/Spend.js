import React from 'react';
import { Container, Button, Modal, Grid, Segment } from 'semantic-ui-react';
import UserRewards from '../rewards/UserRewards'
import {Header} from 'semantic-ui-react'
import styled from 'styled-components';

const DivContainer = styled.div`
  background: linear-gradient(to top right, blue, gold);
`

const Transparent = styled(Segment)`
  background: transparent !important;
`

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
  <DivContainer>
    <h1 textAlign = "center"> Spend Points</h1>
    <Segment>
      <p textAlign="center"> Spend points on rewards </p>
      <Container>
        <UserRewards />
      </Container>
    </Segment>
    </DivContainer>
  </>
)

export default Spend;
