import React from 'react';
import { Link } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

const RewardsList = ({ rewards, user }) => (
  rewards.map( r => 
    <>
    <Segment>
      <Link to={{
        pathname: `/rewards/${r.id}`,
        state: {...r, user}
        }}>
        { r.reward_name }
      </Link>
    </Segment>
    </>
  )
)

export default RewardsList;

