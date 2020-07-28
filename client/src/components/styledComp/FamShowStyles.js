import styled from 'styled-components';
import { Container, Grid, Segment } from 'semantic-ui-react';
import '../../index.css'

export const HeaderText = styled.h2`
  font-size: 36px;
  font-family: Work Sans;
  font-weight: bold;
  text-align: left;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap
  margine: 20px !important;
  padding-rig
`
export const StyledBox = styled(Segment)`
  background-color: #e3f6f5 !important;
  border: 1px #e3f6f5 !important;
  border-radius: 16px !important;
  display: flex !important;
  position: left !important;
  flex-direction: column !important;
  flex-wrap: wrap !important;
`
export const Header2 = styled.h3`
  font-size: 21px;
  font-family: Work Sans;
  text-align: left;
  display: flex;
  flex-direction: 
  flex-wrap: wrap;
`
export const StyledButton = styled.button`
  background-color: #272643;
  color: white;
  border: 1px #272642;
  border-radius: 8px;
  font-family: Work Sans;
  margin: 5px;
  width: 170px;
  height: 56px;
`

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap
`
export const MembersContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap
`
export const AdminContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

`
export const StyledHeaderContainer = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap
`
export const StyledGridRow = styled(Grid.Row)`
  margin: auto;
  display: flex;
`
export const Box2 = styled(Segment)`
  background-color: white !important;
  border: 1px white !important;
  border-radius: 16px !important;
  display: flex !important;
  position: left !important;
  flex-direction: column !important;
  flex-wrap: wrap !important;
`