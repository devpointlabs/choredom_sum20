import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

const UserRewardsList = ({ rewards, user }) => (
  rewards.map( r => 
    <>
      <Card>
      <Link to={{
        pathname: `/userrewards/${r.id}`,
        state: {...r, user}
      }}>
        { r.reward_name }
      </Link>
      </Card>
    </>
  )
)

export default UserRewardsList;

