import React from 'react';
import { TaskConsumer } from '../../providers/TaskProvider';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Button, Modal } from 'semantic-ui-react';

class Tasks extends React.Component {
  state = { modalopen: false, }
  componentDidMount() {
    this.props.getAllTasks(this.props.user.id)
  }

  open = () => this.setState({ modalopen: true })
  close = () => this.setState({ modalopen: false })

  render() {
    const {addTask, tasks, user} = this.props
    const { modalopen } = this.state
    return (
    <>
      <h1>Tasks</h1>
        
      <Modal trigger={<Button onClick={() => this.open()}>Create Task</Button>} centered={false} open={modalopen} onClose={this.close}>
        <Modal.Header>Create New Task</Modal.Header>
          <Modal.Content>
            <TaskForm addTask={addTask} user_id={user.id} close={this.close}/>
          </Modal.Content>
      </Modal>
      <br/>
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