import React, { Component } from 'react';
import { Form, Grid } from 'semantic-ui-react';
import { FamConsumer } from '../../providers/FamProvider';
import { TextInput, InputLabel, Btn, } from '../styledComp/TaskFormStyles';


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
      <>
      <Grid centered columns={1} divided>
      <Grid.Column>
        <Form onSubmit={this.handleSubmit}>
          <Grid.Row>
          <InputLabel position='left'>
            Name
          </InputLabel>
          </Grid.Row>

          <Grid.Row>
          <TextInput
            name='task_name'
            value={task_name}
            onChange={this.handleChange}
            required
          />
          </Grid.Row>

          <Grid.Row>
          <InputLabel position='left'>
            Description
          </InputLabel>
          </Grid.Row>

          <Grid.Row>
          <TextInput
            value={task_description}
            onChange={this.handleChange}
            required
          />
          </Grid.Row>

          <Grid.Row>
          <InputLabel position='left'>
            Point Value
          </InputLabel>
          </Grid.Row>

          <Grid.Row>
          <TextInput
            name='task_value'
            value={task_value}
            onChange={this.handleChange}
            required
          />
          </Grid.Row>
          <InputLabel position='left'>
            Select Family
          </InputLabel>
          <Form.Select
              name='famId'
              value={famId}
              placeholder='Select Family'
              onChange={this.handleChange}
              fluid
              options={this.setFamilies()}
            />
          <Btn>Submit</Btn>
        </Form>
        </Grid.Column>
        </Grid>
      </>
    )
  }
}

const ConnectedTaskForm = (props) => (
  <FamConsumer>
    { values => <TaskForm {...props} {...values} /> }
  </FamConsumer>
)

export default ConnectedTaskForm;
