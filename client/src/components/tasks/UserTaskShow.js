import React, { Component } from 'react';
import { TaskConsumer } from '../../providers/TaskProvider';
import { Button } from 'semantic-ui-react';


class UserTaskShow extends Component {
  state = { editing: false }

  toggleUpdate = () => this.setState({ editing: !this.state.editing })

  render() {
    const { user_id, id, task_name, task_description, task_value, } = this.props.location.state
    const { editing } = this.state
    return(
      <>
        <h1>{task_name}</h1>
        <h3>{task_description}</h3>
        <h4>{task_value}</h4>
      </>
    )
  }
}

const ConnectedTaskShow = (props) => (
  <TaskConsumer>
    { value => (
      <UserTaskShow 
        {...props} 
      />
    )}
  </TaskConsumer>
)

export default ConnectedTaskShow;