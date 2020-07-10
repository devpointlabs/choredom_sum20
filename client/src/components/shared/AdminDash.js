import React from 'react';
import { Container, Button, Modal, Grid } from 'semantic-ui-react';
import Fams from '../fams/Fams';
import Rewards from '../rewards/Rewards';
import Tasks from '../tasks/Tasks'


const AdminDash = () => (
  <>
    <h1>Admin Dashboard</h1>
    
    {/* <Grid.Column key={i}>
      <Image src='/images/wireframe/image.png' />
    </Grid.Column> */}
    <p> My Family Section Across Top Row </p>
    <div>
      < Fams />
    </div>
    <div>
      < Rewards />
    </div>
    <div>
      < Tasks />
    </div>
  </>
  )
export default AdminDash;