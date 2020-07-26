import React from 'react';
import { StyledSegment, SegmentHeader, SegmentText, StyledButton } from '../styledComp/DashStyles';
import styled from 'styled-components';

const ClaimedReward = ({ reward_name, reward_description, usedReward, id}) => (
  <>
  <StyledSegment>
    <SegmentHeader>{reward_name}</SegmentHeader>
    <SegmentText> {reward_description}</SegmentText>
    <p align='right'>
      <StyledButton onClick={() => usedReward(id)}>Use Reward</StyledButton>
    </p>
  </StyledSegment>
  </>
)

export default ClaimedReward;