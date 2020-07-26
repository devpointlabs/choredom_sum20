import React from 'react';
import { Segment, Container, Button, Modal, Grid, Header, Card } from 'semantic-ui-react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { RewardConsumer } from '../../providers/RewardProvider';
import ClaimedReward from '../rewards/ClaimedReward'
import styled from 'styled-components';
import { SegmentText, } from '../styledComp/DashStyles';

const StyledSegment = styled(Segment)`
height: 132px;
border: 1px white !important;
border-radius: 16px !important;
box-shadow: 0 4px 10px 0 rgba(0, 0, 0, .16), 0 4px 10px 0 rgba(0, 0, 0, 0.16) !important;
`

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
            <p>{ points }</p>
            </StyledSegment>
          </Grid.Column>
          <Grid.Column width={12}>
            <h1>My Family</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Column>
          {this.props.rewards.map( r => r.reward_claimed ? <ClaimedReward {...r} usedReward={this.props.useReward}/>
              : "Keep working hard to earn a reward" )}
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