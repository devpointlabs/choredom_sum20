import React from 'react';
import { TaskConsumer } from '../../providers/TaskProvider';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { AuthConsumer } from '../../providers/AuthProvider';

class Tasks extends React.Component {
  
  componentDidMount() {
    this.props.getAllTasks(this.props.user.id)
  }

  render() {
    const {addTask, tasks, user} = this.props
    return (
    <>
      <h1>Tasks Page</h1>
        <TaskForm addTask={addTask} user_id={user.id} />
        {
          tasks ?
            <TaskList tasks={tasks}/>
            : <p>No Tasks</p>
        }
      </>
    )
  }
}

const ConnectedTasks = (props) => (
  <TaskConsumer>
    {
      values => (
        <Tasks {...props} {...values} />
      )
    }
  </TaskConsumer>
)

const MegaTasks = (props) => (
  <AuthConsumer>
    {
      values => (
        <ConnectedTasks {...props} {...values} /> 
      )
    }
  </AuthConsumer>
)

export default MegaTasks;