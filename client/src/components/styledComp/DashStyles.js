import styled from 'styled-components';
import { Button, Segment } from 'semantic-ui-react';

export const StyledSegment = styled(Segment)`
  height: 132px;
  border: 1px white !important;
  border-radius: 16px !important;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, .16), 0 4px 10px 0 rgba(0, 0, 0, 0.16) !important;
`

export const StyledButton = styled.a`
font-family: Work Sans;
background-color: transparent;
color: #2c698d;
font-size: 14px;
display: flex;
align-items: right;
flex-flow: colunn;
`

export const SegmentHeader = styled.h1`
  font-family: Work Sans;
  color: black;
  font-weight: bold;
  font-size: 24px;
  `

  export const SegmentText = styled.p`
  font-family: Work Sans;
  color: black;
  font-size: 16px;
  `

  export const SegmentCost = styled.p`
  font-family: Work Sans;
  color: #52CC7A;
  font-weight: bold;
  font-size: 16px;
  `
;