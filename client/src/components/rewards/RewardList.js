import React from 'react';
import { Link } from 'react-router-dom';
import { StyledSegment, SegmentHeader, SegmentText, SegmentCost } from '../styledComp/DashStyles';

const RewardsList = ({ rewards, user }) => (
  rewards.map( r => 
    <>
      <Link to={{
      pathname: `/rewards/${r.id}`,
      state: {...r, user}
      }}>
        <StyledSegment>
          <SegmentHeader>{ r.reward_name }</SegmentHeader>
          <SegmentText>{ r.reward_description}</SegmentText>
          <SegmentCost>${ r.reward_cost}</SegmentCost>
        </StyledSegment>
      </Link>
      <br/>
    </>
  )
)

export default RewardsList;

