import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class RewardForm extends Component {
  state = { reward_name: '', reward_description: '', reward_cost: '', reward_claimed: false, reward_used: false }

  componentDidMount() {
    if (this.props.id) {
      const { reward_name, reward_description, reward_cost, reward_claimed, reward_used } = this.props
      this.setState({ reward_name, reward_description, reward_cost, reward_claimed, reward_used })
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
      this.props.updateReward(this.props.user_id, id, this.state, history)
      this.props.toggleUpdate()
    } else {
      this.props.addReward(this.props.user_id, this.state)
    }
    this.setState({ reward_name: '', reward_description: '', reward_cost: '', reward_claimed: '', reward_used: '' })
  }

  render() {
    const { reward_name, reward_description, reward_cost, } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='reward_name'
          value={reward_name}
          onChange={this.handleChange}
          label='Reward Name'
          required
        />
        <Form.Input
          name='reward_description'
          value={reward_description}
          onChange={this.handleChange}
          label='Reward Description'
          required
        />
        <Form.Input
          name='reward_cost'
          value={reward_cost}
          onChange={this.handleChange}
          label='Reward Cost'
          required
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default RewardForm;