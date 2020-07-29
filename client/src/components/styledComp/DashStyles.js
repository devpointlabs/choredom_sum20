import styled from 'styled-components';
import { Segment } from 'semantic-ui-react';

export const StyledSegment = styled(Segment)`
  height: 132px;
  border: 1px white !important;
  border-radius: 16px !important;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, .16), 0 4px 10px 0 rgba(0, 0, 0, 0.16) !important;
  overflow-y: scroll;
`
export const SegmentHeader = styled.h1`
  font-family: Work Sans;
  color: black;
  font-weight: bold;
  font-size: 24px;
  `
export const StyledButton = styled.button`
  font-family: Work Sans;
  border-radius: 5px;
  background-color: transparent;
  color: #2c698d;
  font-size: 14px;
	outline: none;
	border: none;
	cursor: pointer;
  `
  
  export const SegmentText = styled.p`
  font-family: Work Sans;
  color: black;
  font-size: 16px;
  `
  export const PointsText = styled.p`
  font-family: Work Sans;
  color: #272643;
  font-size: 60px;
  font-weight: bold;
  `
  export const SegmentCost = styled.p`
  font-family: Work Sans;
  color: #52CC7A;
  font-weight: bold;
  font-size: 16px;
  `
;