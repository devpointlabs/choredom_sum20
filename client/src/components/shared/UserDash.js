import React from 'react';
import { Segment, Container, Button, Modal, Grid, Header, Card } from 'semantic-ui-react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { RewardConsumer } from '../../providers/RewardProvider';
import ClaimedReward from '../rewards/ClaimedReward'
import styled from 'styled-components';
import { StyledSegment, SegmentText, PointsText } from '../styledComp/DashStyles';

class UserDash extends React.Component {
  
  componentDidMount() {
      this.props.getAllRewards(this.props.user.id)
  }

  render() {
    const { points } = this.props.user
    return (
      <>
      <br/>
      <Grid columns='equal'>
        <Grid.Row>
          <Grid.Column>
            <StyledSegment inverted color='grey' tertiary>
            <SegmentText>My Points</SegmentText>
            <PointsText>{ points }</PointsText>
            </StyledSegment>
          </Grid.Column>
          <Grid.Column width={12}>
            <StyledSegment>
              <SegmentText>My Family</SegmentText>
            </StyledSegment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Column>
          { this.props.rewards.map( r => r.reward_claimed ?
          <ClaimedReward {...r} usedReward={this.props.useReward}/>
          : "Keep working hard to earn a reward"
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