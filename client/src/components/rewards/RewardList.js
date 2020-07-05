import React from 'react';
import { Link } from 'react-router-dom';

const RewardList = ({ rewards }) => (
  <>
    <h1>Rewards:</h1>
    {
      rewards.map( r => 
        <>
          <Link to={{
            pathname: `/rewards/${r.id}`,
            state: {...r}
          }}>
            { r.name }
          </Link>
          <br />
        </>
      )
    }
  </>
)

export default RewardList;