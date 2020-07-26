import React, { Component } from 'react';
import { TaskConsumer } from '../../providers/TaskProvider';
import { Grid, Button } from 'semantic-ui-react';
import TaskForm from './TaskForm';
import { StyledSegment, SegmentHeader, SegmentText, SegmentCost } from '../styledComp/DashStyles';

class TaskShow extends Component {
  state = { editing: false }

  toggleUpdate = () => this.setState({ editing: !this.state.editing })

  render() {
    const { user_id, id, task_name, task_description, task_value, } = this.props.location.state
    const { editing } = this.state
    const { updateTask, deleteTask, history } = this.props
    return(
      <>
      <br/>
      <StyledSegment>
        <SegmentHeader>{task_name}</SegmentHeader>
        <SegmentText>{task_description}</SegmentText>
        <SegmentCost>+{task_value}</SegmentCost>
      </StyledSegment>
        { editing ? 
          <TaskForm 
            user_id={user_id}
            id={id}
            task_name={task_name}
            task_description={task_description}
            task_value={task_value}
            updateTask={updateTask}
            toggleUpdate={this.toggleUpdate}
            history={history}
          />
          :
          <Button onClick={this.toggleUpdate}>
            Edit
          </Button>
        }
          <Button onClick={() => deleteTask(user_id, id, history)}>Delete</Button>
      </>
    )
  }
}

const ConnectedTaskShow = (props) => (
  <TaskConsumer>
    { value => (
      <TaskShow 
        {...props} 
        updateTask={value.updateTask} 
        deleteTask={value.deleteTask}
      />
    )}
  </TaskConsumer>
)

export default ConnectedTaskShow;