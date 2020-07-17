import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Grid } from 'semantic-ui-react';

const UserRewardList = ({ rewards, user, subPoints }) => (
  <>
    <Grid columns={3} padded doubling>
      {
        rewards.map( r =>
          <>
          <Grid.Column>
              <Card>
                <Card.Content header={r.reward_name}/>
                <Card.Content>
                { r.reward_description }
                </Card.Content>
                <Card.Content>
                { r.reward_cost }
                </Card.Content>
              </Card> 
          </Grid.Column>
      </>
  )
}
</Grid>
</>
)  

const ConnectedUserRewardsList = (props) => (
  <AuthConsumer>
    {
      value => ( <UserRewardsList {...props} {...value}/> )
    }
  </AuthConsumer>
)

export default ConnectedUserRewardsList;

