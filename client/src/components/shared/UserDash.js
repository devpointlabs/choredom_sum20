import React from 'react';
import { Segment, Container, Button, Modal, Grid, Header, Card } from 'semantic-ui-react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { RewardConsumer } from '../../providers/RewardProvider';
import ClaimedReward from '../rewards/ClaimedReward'
import styled from 'styled-components';
import { SegmentText, PointsText } from '../styledComp/DashStyles';
import Fams from '../fams/Fams';

const PointsSegment = styled(Segment)`
  height: 225px;
  background-color: #E0E0E0!important;
  border: 1px white !important;
  border-radius: 16px !important;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, .16), 0 4px 10px 0 rgba(0, 0, 0, 0.16) !important;
`
const StyledSegment = styled(Segment)`
  border: 1px white !important;
  border-radius: 16px !important;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, .16), 0 4px 10px 0 rgba(0, 0, 0, 0.16) !important;
`
class UserDash extends React.Component {
  
  componentDidMount() {
      this.props.getAllRewards(this.props.user.id)
  }

  rewardMessage = () => {
    let rewardArray = []
    for (let i=0; i < this.props.rewards.length; i++) {
      if ( this.props.rewards[i].reward_claimed ) {
        rewardArray.push(this.props.reward[i])
      }
    }
      return rewardArray.length !== 0 ? "My Rewards" : "Keep working hard"
  }

  render() {
    const { points } = this.props.user
    return (
      <>
      <br/>
      <Grid columns='equal'>
        <Grid.Row>
          <Grid.Column>
            <PointsSegment>
              <SegmentText>My Points</SegmentText>
              <PointsText>{ points }</PointsText>
            </PointsSegment>
          </Grid.Column>
          <Grid.Column width={12}>
            <StyledSegment>
              <SegmentText>My Family</SegmentText>
              < Fams />
            </StyledSegment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Column>
          <SegmentText>My Rewards</SegmentText>
          {/* { this.rewardMessage() } */}
          { this.props.rewards.map( r => r.reward_claimed ?
          <ClaimedReward {...r} usedReward={this.props.useReward}/>
          : ""
           )}
        </Grid.Column>
      </Grid>
      </>
    )
  } 
}

const RewardUserDash = (props) => (
  <RewardConsumer>
    {
       values => (
      <UserDash {...props} {...values} />
    )}
  </RewardConsumer>
)

const ConnectedUserDash = (props) => (
  <AuthConsumer>
    {
       values => (
      <RewardUserDash {...props} {...values} />
    )}
  </AuthConsumer>
)

export default ConnectedUserDash;