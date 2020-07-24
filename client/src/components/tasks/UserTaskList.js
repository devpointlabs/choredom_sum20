import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Grid, Button } from 'semantic-ui-react';

const UserTaskList = ({ tasks, user, addPoints, completeTask, history }) => (
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
                  {
                    t.task_complete ? 
                      <p>claimed</p>
                    :
                      <Button onClick={ () => completeTask(user.id, t.id, history, addPoints, t.task_value) }>Complete Task</Button>
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

export default UserTaskList;

