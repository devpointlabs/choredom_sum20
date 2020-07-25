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
                    user.points >= r.reward_cost ?
                      <Button onClick={ () => claimReward(user.id, r.id, history, subPoints, r.reward_cost) }>Buy</Button>
                      :
                      <Button disabled>Buy</Button>
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

