import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class RewardForm extends Component {
  state = { reward_name: '', reward_description: '', reward_cost: '', reward_claimed: '', reward_used: '' }

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
      this.props.updateReward(id, this.state, history)
      this.props.toggleUpdate()
    } else {
      this.props.addReward(this.state)
    }
    this.setState({ reward_name: '', reward_description: '', reward_cost: '', reward_claimed: '', reward_used: '' })
  }

  render() {
    const { reward_name, reward_description, reward_cost, reward_claimed, reward_used } = this.state
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
         <Form.Input
          name='reward_claimed'
          value={reward_claimed}
          onChange={this.handleChange}
          label='Reward Claimed'
          required
        />
         <Form.Input
          name='reward_used'
          value={reward_used}
          onChange={this.handleChange}
          label='Reward Used'
          required
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default RewardForm;