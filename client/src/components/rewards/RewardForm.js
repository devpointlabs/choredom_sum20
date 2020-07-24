import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { FamConsumer } from '../../providers/FamProvider';

class RewardForm extends Component {
  state = { famId: null, reward_name: '', reward_description: '', reward_cost: '', reward_claimed: false, reward_used: false, }

  componentDidMount() {
    this.props.getAllFams(this.props.user_id)
    if (this.props.id) {
      const { reward_name, reward_description, reward_cost, famId } = this.props
      this.setState({ reward_name, reward_description, reward_cost, famId })
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
      this.props.updateReward(this.props.user_id, id, this.state, history)
      this.props.toggleUpdate()
    } else {
      this.props.addReward(this.props.user_id, this.state)
    }
    this.props.close()
    this.setState({ reward_name: '', reward_description: '', reward_cost: '', reward_claimed: '', reward_used: '', famId: null })
  }

  close = () => this.setState({ open: false })

  render() {
    const { reward_name, reward_description, reward_cost, famId } = this.state
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

const ConnectedRewardForm = (props) => (
  <FamConsumer>
    { values => <RewardForm {...props} {...values} /> }
  </FamConsumer>
)

export default ConnectedRewardForm;