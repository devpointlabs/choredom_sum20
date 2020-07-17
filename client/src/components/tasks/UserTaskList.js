import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Grid } from 'semantic-ui-react';

const UserTaskList = ({ tasks, user, addPoints }) => (
  <>
    <Grid columns={3} padded doubling>
      {
        tasks.map( t =>
          <>
          <Grid.Column>
              <Card>
                <Card.Content header={t.task_name}/>
                <Card.Content>
                { t.task_description }
                </Card.Content>
                <Card.Content>
                { t.task_value }
                </Card.Content>
              </Card> 
          </Grid.Column>
      </>
  )
}
</Grid>
</>
)  

const ConnectedUserTaskList = (props) => (
  <AuthConsumer>
    {
      value => ( <UserTaskList {...props} {...value}/> )
    }
  </AuthConsumer>
)

export default ConnectedUserTaskList;

