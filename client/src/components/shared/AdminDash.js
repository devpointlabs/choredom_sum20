import React from 'react';
import { Container, Button, Modal } from 'semantic-ui-react';
import Fams from '../fams/Fams';
import Rewards from '../rewards/Rewards';
import Tasks from '../tasks/Tasks'


const AdminDash = () => (
  <>
    <h1>Admin Dashboard</h1>
    <p> My Family Section Across Top Row </p>
    <div>
      < Fams />
    </div>
    <p> Rewards Section Left Column </p>
    {/* Cannot read property 'map' of undefined */}
    {/* <div>
      < Rewards />
    </div> */}
    <p> Tasks Section Right Column </p>
    {/* Cannot read property 'map' of undefined */}
    {/* <div>
      < Tasks />
    </div> */}
  </>
  )
export default AdminDash;