import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

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
      this.props.addFam(this.state)
      //const FamGroupName = { last_name: this.state.fam_name }
      //this.props.addFamGroup(fam_id, FamGroupName)
      //
      //Add Fam Group
      //Need to pass in the Fam and the User through association
    }
    this.setState({ fam_name: '', fam_admins: '', fam_members: '' })
  }

  render() {
    const { fam_name, fam_admins, fam_members } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='fam_name'
          value={fam_name}
          onChange={this.handleChange}
          label='Family Name'
          required
        />
        {/* <Form.Input
          name='fam_admins'
          value={fam_admins}
          onChange={this.handleChange}
          label='Family Admins'
          required
        />
        <Form.Input
          name='fam_members'
          value={fam_members}
          onChange={this.handleChange}
          label='Family Members'
          required
        /> */}
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default FamForm;