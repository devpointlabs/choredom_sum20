import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, Header } from 'semantic-ui-react';

const FamList = ({ fams }) => (
  <>
    {/* <h1>Families:</h1> */}
    <Grid columns={5} padded doubling>
    {
      fams.map( f => 
        <>
        <Grid.Column>
          <Card>
            <Card.Content>
              <br/>
                <Header>
                  <Link to={{
                    pathname: `/fams/${f.id}`,
                    state: {...f}
                  }}>
                    { f.fam_name }
                  </Link>
                </Header>
              <br/>
              <br/>
              </Card.Content>
          </Card>
        </Grid.Column>
        </>
      )
    }
    </Grid>
  </>
)

export default FamList;

{/* <Grid columns={5} padded doubling>
{
  fams.map( f => 
    <>
    <Grid.Column>
      <Card>
        <Link to={{
          pathname: `/fams/${f.id}`,
          //
          // pathname: `/famsgroups/${f.id}`,
          state: {...f}
        }}>
          { f.fam_name }
        </Link>
      </Card>
    </Grid.Column>
    </>
  )
}
</Grid> */}