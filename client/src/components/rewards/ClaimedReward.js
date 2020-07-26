import React from 'react';
import { StyledSegment, SegmentHeader, SegmentText, StyledButton } from '../styledComp/DashStyles';

const ClaimedReward = ({ reward_name, reward_description, usedReward, id}) => (
  <>
  <StyledSegment>
    <SegmentHeader>{reward_name}</SegmentHeader>
    <SegmentText> {reward_description}</SegmentText>
    <p textAlign='right'>
    <StyledButton onClick={() => usedReward(id)}>Use Reward</StyledButton>
    </p>
  </StyledSegment>
  </>
)

export default ClaimedReward;