import React, { Component } from 'react';
import { Form, Grid } from 'semantic-ui-react';
import { FamConsumer } from '../../providers/FamProvider';
import { TextInput, InputLabel, Btn, } from '../styledComp/TaskFormStyles';


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
    // this.props.close()
    this.setState({ reward_name: '', reward_description: '', reward_cost: '', reward_claimed: '', reward_used: '', famId: null })
  }

  close = () => this.setState({ open: false })

  render() {
    const { reward_name, reward_description, reward_cost, famId } = this.state
    return(
      <>
      <Grid centered columns={1} divided>
      <Grid.Column>
      <Form onSubmit={this.handleSubmit}>

        <Grid.Row>
          <InputLabel position='left'>
            Reward Name
          </InputLabel>
        </Grid.Row>
        <Grid.Row>
        <TextInput
          name='reward_name'
          value={reward_name}
          onChange={this.handleChange}
          required
        />
        </Grid.Row>

        <Grid.Row>
          <InputLabel position='left'>
            Reward Description
          </InputLabel>
        </Grid.Row>
        <TextInput
          name='reward_description'
          value={reward_description}
          onChange={this.handleChange}
          required
        />

        <Grid.Row>
          <InputLabel position='left'>
            Reward Cost
          </InputLabel>
        </Grid.Row>
        <Grid.Row></Grid.Row>
        <TextInput
          name='reward_cost'
          value={reward_cost}
          onChange={this.handleChange}
          required
        />

         <Grid.Row>
          <InputLabel position='left'>
            Select Family
          </InputLabel>
         </Grid.Row>
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

const ConnectedRewardForm = (props) => (
  <FamConsumer>
    { values => <RewardForm {...props} {...values} /> }
  </FamConsumer>
)

export default ConnectedRewardForm;