import React from 'react';
import { Grid, Segment } from 'semantic-ui-react'
import Fams from '../fams/Fams';
import Rewards from '../rewards/Rewards';
import Tasks from '../tasks/Tasks'
import { SegmentText } from '../styledComp/DashStyles';

const AdminDash = () => (
  <>
    <br/>
    <SegmentText>My Families</SegmentText>
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