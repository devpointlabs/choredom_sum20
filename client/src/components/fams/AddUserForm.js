import React, { Component } from 'react';
import { Form, } from 'semantic-ui-react'

class AddUserForm extends Component {
  state = { email: '' }
  //Do we need to add other user contents to the state above?

  componentDidMount() {
    if (this.props.id) {
      const { email } = this.props
      this.setState({ email })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
      this.props.addMember(this.props.fam_id, this.state)
      this.props.close()
      this.setState({ email: '' })
  }

  close = () => this.setState({ open: false })

  render() {
    const { email, } = this.state
    return(
            <Form onSubmit={this.handleSubmit}>
              <Form.Input
                name='email'
                value={email}
                onChange={this.handleChange}
                label='Email'
                required
              />
              <Form.Button>Submit</Form.Button>
          </Form>
    )
  }
}

export default AddUserForm;