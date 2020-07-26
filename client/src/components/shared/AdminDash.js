import React from 'react';
import { Grid, Segment } from 'semantic-ui-react'
import Fams from '../fams/Fams';
import Rewards from '../rewards/Rewards';
import Tasks from '../tasks/Tasks'

const AdminDash = () => (
  <>
    <p fontSize='14px' font-family='Work Sans'>My Family</p>
    < Fams />
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