import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, Header } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledCard = styled(Card)`
height: 191px;
background-color: #272643;
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
              <StyledCard>
                <Card.Content>
                  <br/>
                    <Header>
                      { f.fam_name }
                    </Header>
                  <br/>
                  <br/>
                </Card.Content>
              </StyledCard>
            </Link>
          </Grid.Column>
        </>
      )
    }
  </>
)

export default FamList;