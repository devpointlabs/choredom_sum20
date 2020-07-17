//This becomes the Manage Reward page
import React from 'react';
import { TaskConsumer } from '../../providers/TaskProvider';
import UserTaskList from './UserTaskList';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Button, Modal, Card} from 'semantic-ui-react';

class UserTasks extends React.Component {
  componentDidMount() {
    this.props.getAllTasks(this.props.user.id)
  }
  render() {
    const {tasks, user} = this.props

    return (
      <>
      <Card>
       <h1>Tasks</h1>
          {
            tasks ? 
              <UserTaskList user={user} tasks={tasks} />
              : <p>No Tasks</p>
          }
        </Card>
      </>
    )
  }
}
const ConnectedTasks = (props) => (
  <TaskConsumer>
    {
      values => (
        <UserTasks {...props} {...values} />
      )
    }
  </TaskConsumer>
)
const MegaTasks = (props) => (
  <AuthConsumer>
    {
      values => <ConnectedTasks {...props} {...values} />
    }
  </AuthConsumer>
)
export default MegaTasks;