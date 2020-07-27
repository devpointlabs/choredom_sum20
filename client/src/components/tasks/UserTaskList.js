import React from 'react';
import {Grid} from 'semantic-ui-react';
import {TaskNameText, TaskDescriptionText, TaskValueText, Claimed, StyledCard, EarnButton} from '../styledComp/EarnStyles';
import '../../index.css'


const UserTaskList = ({ tasks, user, addPoints, completeTask, history }) => (
  <>
    <Grid columns={3}>
      {
        tasks.map( t =>
          <>
            <Grid.Column>
              <StyledCard>
                <Grid.Row>
                <TaskNameText>{t.task_name}</TaskNameText>
                </Grid.Row>
                <Grid.Row>
                <TaskDescriptionText>{ t.task_description }</TaskDescriptionText>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column floated='left'>
                    {
                      t.task_complete ?
                        <></>
                      :
                        <TaskValueText>+{ t.task_value }</TaskValueText>
                    }
                  </Grid.Column>
                  <Grid.Column floated='right'>
                    {
                      t.task_complete ? 
                        <Claimed>Claimed</Claimed>
                      :
                        <EarnButton onClick={ () => completeTask(user.id, t.id, history, addPoints, t.task_value) }>Claim</EarnButton>
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

export default UserTaskList;

