import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class TaskForm extends Component {
  state = { famId: null, task_name: '', task_description: '', task_value: '' }

  componentDidMount() {
    if (this.props.id) {
      const { task_name, task_description, task_value, famId } = this.props
      this.setState({ task_name, task_description, task_value, famId })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      const { id, history } = this.props
      this.props.updateTask(this.props.user_id, id, this.state, history)
      this.props.toggleUpdate()
    } else {
      this.props.addTask(this.props.user_id, this.state)
    }
    this.setState({ task_name: '', task_description: '', task_value: '', famId: null })
  }

  render() {
    const { task_name, task_description, task_value, famId } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='task_name'
          value={task_name}
          onChange={this.handleChange}
          label='Task Name'
          required
        />
        <Form.Input
          name='task_description'
          value={task_description}
          onChange={this.handleChange}
          label='Task Description'
          required
        />
        <Form.Input
          name='task_value'
          value={task_value}
          onChange={this.handleChange}
          label='Task Value'
          required
        />
        <Form.Input
          name='famId'
          value={famId}
          onChange={this.handleChange}
          label='Fam Id'
          required
          type='numbers'
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default TaskForm;