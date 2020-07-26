import React from 'react';
import { Grid } from 'semantic-ui-react';
import { SpendButton, RewardNameText, RewardDescriptionText, RewardCostText, Claimed, StyledCard } from '../styledComp/SpendStyles';
import '../../index.css'

const UserRewardList = ({ rewards, user, subPoints, claimReward, history }) => (
  <>
    <Grid columns={3}>
      {
        rewards.map( r =>
          <>
            <Grid.Column>
              <StyledCard>
                <Grid.Row>
                  <RewardNameText>{r.reward_name}</RewardNameText>
                </Grid.Row>
                <Grid.Row>
                  <RewardDescriptionText>{ r.reward_description }</RewardDescriptionText>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column floated='left'>
                    {
                      r.reward_claimed?
                        <></>
                      :
                        <RewardCostText>{ r.reward_cost }</RewardCostText>
                    }
                  </Grid.Column>
                <Grid.Column floated='right'>
                  {
                    r.reward_claimed ? 
                      <Claimed>Used</Claimed>
                    :
                    user.points >= r.reward_cost ?
                      <SpendButton onClick={ () => claimReward(user.id, r.id, history, subPoints, r.reward_cost) }>Buy</SpendButton>
                      :
                      <SpendButton disabled>Buy</SpendButton>
                  }
                </Grid.Column>
               </Grid.Row>
              </StyledCard> 
            </Grid.Column>
          </>
        )
      }
    </Grid>
  </>
)  
export default UserRewardList;