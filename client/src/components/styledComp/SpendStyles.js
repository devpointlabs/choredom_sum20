import styled from 'styled-components';
import { Card, Segment } from 'semantic-ui-react';


export const SpendButton = styled.a`
font-family: Work Sans;
padding-right: 15px !important;
padding-bottom: 10px !important;
background-color: transparent;
color: #2c698d;
font-size: 14px;
`

export const RewardNameText = styled(Card.Content)`
  font-family: Work Sans;
  font-weight: bold;
  padding-left: 15px !important;
  padding-top: 15px !important;
  padding-bottom: 10px !important;
  font-size: 24px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const RewardDescriptionText = styled(Card.Content)`
  font-family: Work Sans;
  font-size: 16px;
  padding-top: 10px !important;
  padding-bottom: 10px !important;
  paddint-right: 15px !important;
  padding-left: 15px !important;
  text-overflow: ellipsis;
  white-space: wrap;
  overflow: hidden;
`

export const RewardCostText = styled(Card.Content)`
  font-family: Work Sans;
  font-size: 16px;
  padding-left: 15px !important;
  padding-bottom: 10px !important;
  color: #10D60D;
  font-weight: bold;
`

export const Claimed = styled(Card.Content)`
  font-family: Work Sans;
  font-size: 14px;
  padding-right: 15px !important;
  padding-bottom: 10px !important;
  color: red;
`

export const StyledCard = styled(Card)`
  border: 1px white !important;
  border-radius: 16px !important;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, .16), 0 4px 10px 0 rgba(0, 0, 0, 0.16) !important;
`

export const HeaderText = styled.h2`
  font-size: 24px;
  font-family: Work Sans;
  font-weight: bold;
`

export const PText = styled.p`
  font-family: Work Sans;
  font-size: 18px;
  padding-bottom: 15px;
`