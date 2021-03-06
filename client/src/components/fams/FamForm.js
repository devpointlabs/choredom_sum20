import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { FamGroupConsumer } from '../../providers/FamGroupProvider';
import { TextInput, InputLabel, Btn, } from '../styledComp/FormStyles';

class FamForm extends Component {
  state = { fam_name: '', fam_admins: '', fam_members: '' }

  componentDidMount() {
    if (this.props.id) {
      const { fam_name, fam_admins, fam_members } = this.props
      this.setState({ fam_name, fam_admins, fam_members })
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
      this.props.updateFam(id, this.state, history)
      this.props.toggleUpdate()
    } else {
      const FamGroupName = { last_name: this.state.fam_name, user_id: this.props.userId }
      this.props.addFam(this.state, FamGroupName, this.props.addFamGroup, this.props.history)
    }
    this.props.close()
    this.setState({ fam_name: '', fam_admins: '', fam_members: '' })
  }

  close = () => this.setState({ open: false })

  render() {
    const { fam_name, fam_admins, fam_members } = this.state
    return(
    <>
      <Form onSubmit={this.handleSubmit}>
        <InputLabel position='left'>
          Family Name
        </InputLabel>
        <TextInput
          name='fam_name'
          value={fam_name}
          onChange={this.handleChange}
          required
        />
        <Btn>Submit</Btn>
      </Form>
    </>
    )
  }
}

const ConnectedFamForm = ( props ) => (
  <FamGroupConsumer>
    { 
      values => (
        <FamForm {...props} {...values} />
      )
    }
  </FamGroupConsumer>
)

export default ConnectedFamForm;