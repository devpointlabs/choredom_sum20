import React from 'react';
import { Link } from 'react-router-dom';

const RewardsList = ({ rewards }) => (
  rewards.map( r => 
    <>
      <Link to={{
        pathname: `/rewards/${r.id}`,
        state: {...r}
      }}>
        { r.reward_name }
      </Link>
      <br />
    </>
  )
)

export default RewardsList;

