import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, Header } from 'semantic-ui-react';

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
              <Card>
                <Card.Content>
                  <br/>
                    <Header>
                      { f.fam_name }
                    </Header>
                  <br/>
                  <br/>
                </Card.Content>
              </Card>
            </Link>
          </Grid.Column>
        </>
      )
    }
  </>
)

export default FamList;