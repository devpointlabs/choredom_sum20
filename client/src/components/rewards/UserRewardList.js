import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Grid, Button } from 'semantic-ui-react';
import { AuthConsumer } from '../../providers/AuthProvider';

const UserRewardList = ({ rewards, user, subPoints, claimReward, history }) => (
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
                {
                  r.reward_claimed ? 
                    <p>bought</p>
                  :
                    <Button onClick={ () => claimReward(user.id, r.id, history) }>Buy</Button>
                }
                </Card.Content>
              </Card> 
          </Grid.Column>
      </>
  )
}
</Grid>
</>
)  

export default UserRewardList;

