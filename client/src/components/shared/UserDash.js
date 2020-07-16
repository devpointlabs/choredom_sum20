import React from 'react';
import { Container, Button, Modal, Grid } from 'semantic-ui-react';
import UserRewards from '../rewards/UserRewards';
import UserTasks from '../tasks/UserTasks'



const UserDash = () => (
  <>
    <h1>User Dashboard</h1>
    <p> My Family Section Across Top Row </p>
    <p> My points in upper left corner</p>
    <Grid columns={2} padded>
      <Grid.Column>
        <Container>
          <Grid divided= "vertically">
            <Grid.Row columns={1}>
              <Grid.Column>
               < UserRewards />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Grid.Column>
      <Grid.Column>
        <Container>
          <Grid divided= "vertically">
            <Grid.Row columns={1}>
              <Grid.Column>
                < UserTasks />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Grid.Column>
    </Grid>
  </>
  )
export default UserDash;