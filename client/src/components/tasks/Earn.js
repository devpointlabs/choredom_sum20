import React from 'react';
import { Container, } from 'semantic-ui-react';
import UserTasks from '../tasks/UserTasks'
import { Header } from 'semantic-ui-react'
import styled from 'styled-components';

const Container = styled.div`
  background: linear-gradient(to top right, pink, gold);
`

const Transparent = styled(Segment)`
  background: transparent !important;
`

const HeaderText = styled.h1`
  color: navy !important;
  text-align: center;
  width: 150px;
  white-space nowrap;
  overflow: hidden;
  text-overflow: clip;
`

const Earn = () => (
  <>
    <div>
      <h1 textAlign = "center"> Earn Points</h1>
      <Segment>
        <p textAlign="center"> Complete tasks to earn points </p>
        <Container>
          < UserTasks />
        </Container>
      </Segment>
    </>
  </div>
)

export default Earn;
