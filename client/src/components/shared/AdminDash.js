import React from 'react';
import { Grid, Segment } from 'semantic-ui-react'
import Fams from '../fams/Fams';
import Rewards from '../rewards/Rewards';
import Tasks from '../tasks/Tasks'
import styled from 'styled-components';

const fontSize = (size) => {
  switch(size) {
    case 'large':
      return '24px';
    case 'small':
      return '14px';
    default:
      return '2rem';
  }
}

const HeaderText = styled.h1`
  color: black
  text-align: center;
  font-size: ${props => fontSize(props.fSize)} !important;
`

const AdminDash = () => (
  <>
    <p fontSize='14px' font-family='Work Sans'>My Family</p>
    <HeaderText fSize="large">My Family</HeaderText>
    <p> My Family Section Across Top Row </p>
    <div>
      < Fams />
    </div>
    <Grid columns='equal'>
      <Grid.Column>
        < Rewards />
      </Grid.Column>
      <Grid.Column>
        < Tasks />
      </Grid.Column>
    </Grid>
  </>
)

export default AdminDash;