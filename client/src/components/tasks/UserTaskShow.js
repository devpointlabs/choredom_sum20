import React, { Component } from 'react';
import { TaskConsumer } from '../../providers/TaskProvider';
import { Button } from 'semantic-ui-react';


class UserTaskShow extends Component {

  render() {
    const { user_id, id, task_name, task_description, task_value, task_complete } = this.props.location.state;
    const { completeTask, history } = this.props;
    return(
      <>
        <h1>{task_name}</h1>
        <h3>{task_description}</h3>
        <h4>{task_value}</h4>
        {
          task_complete ? 
            <p>claimed</p>
          :
            <Button onClick={ () => completeTask(user_id, id, history) }>Complete Task</Button>
        }
      </>
    )
  }
}

const ConnectedTaskShow = (props) => (
  <TaskConsumer>
    { value => (
      <UserTaskShow 
        {...props} 
        {...value}
      />
    )}
  </TaskConsumer>
)

export default ConnectedTaskShow;