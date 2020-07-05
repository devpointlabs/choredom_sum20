import React, { Component } from 'react';
import { TaskConsumer } from '../../providers/TaskProvider';
import { Button } from 'semantic-ui-react';
import TaskForm from './TaskForm';

class TaskShow extends Component {
  state = { editing: false }

  toggleUpdate = () => this.setState({ editing: !this.state.editing })

  render() {
    const { id, task_name, task_description, task_value, task_complete } = this.props.location.state
    const { editing } = this.state
    const { updateTask, deleteTask, history } = this.props
    return(
      <>
        <h1>{task_name}</h1>
        <h3>{task_description}</h3>
        <h4>{task_value}</h4>
        <h5>{task_complete}</h5>
        { editing ?
            <TaskForm 
              id={id}
              taskName={task_name}
              taskDescription={task_description}
              taskComplete={task_complete}
              updateTask={updateTask}
              toggleUpdate={this.toggleUpdate}
              history={history}
            />
          :
          <Button onClick={this.toggleUpdate}>
            Edit
          </Button>
        }
        <Button onClick={() => deleteTask(id, history)}>
          Delete
        </Button>
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