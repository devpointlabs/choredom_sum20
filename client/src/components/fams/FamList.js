import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Header } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledSegment = styled(Segment)`
  height: 132px;
  background-color: #272643!important;
  border: 1px white !important;
  border-radius: 16px !important;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, .16), 0 4px 10px 0 rgba(0, 0, 0, 0.16) !important;
  `
const SegmentHeader = styled.h1`
  font-family: Work Sans;
  color: white;
  font-weight: bold;
  font-size: 24px;
  `

const FamList = ({ fams }) => (
  <>
    {
      fams.map( f => 
        <>
        <Grid.Column>
          <Link to={{
          pathname: `/fams/${f.id}`,
          state: {...f}
          }}>
          <StyledSegment>
            <SegmentHeader>
              { f.fam_name }
            </SegmentHeader>
          </StyledSegment>
          </Link>
        </Grid.Column>
        </>
      )
    }
  </>
)

export default FamList;