import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { FamConsumer } from '../../providers/FamProvider';

class TaskForm extends Component {
  state = { famId: null, task_name: '', task_description: '', task_value: '' }

  componentDidMount() {
    this.props.getAllFams(this.props.user_id)
    if (this.props.id) {
      const { task_name, task_description, task_value, famId } = this.props
      this.setState({ task_name, task_description, task_value, famId })
    }
  }

  setFamilies = () => {
    let famOptions = []
    this.props.fams.map( f =>
      famOptions.push({ key: f.id, text: f.fam_name, value: f.id })
    )
    return famOptions
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value, });

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      const { id, history } = this.props
      this.props.updateTask(this.props.user_id, id, this.state, history)
      this.props.toggleUpdate()
    } else {
      this.props.addTask(this.props.user_id, this.state)
    }
    this.props.close()
    this.setState({ task_name: '', task_description: '', task_value: '', famId: null })
  }

  close = () => this.setState({ open: false })

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
        <Form.Select
            name='famId'
            value={famId}
            label='Family'
            placeholder='Select Family'
            onChange={this.handleChange}
            fluid
            options={this.setFamilies()}
          />

        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

const ConnectedTaskForm = (props) => (
  <FamConsumer>
    { values => <TaskForm {...props} {...values} /> }
  </FamConsumer>
)

export default ConnectedTaskForm;
