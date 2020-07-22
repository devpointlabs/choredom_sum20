import React from 'react';
import { AuthConsumer, } from "../../providers/AuthProvider";
import { Button, Form, Segment, Header, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';

class Register extends React.Component {
  state = { email: '', password: '', passwordConfirmation: ''};
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;

    if (password === passwordConfirmation)
      handleRegister({ email, password, passwordConfirmation, }, history);
    else
      alert('Passwords Do Not Match!')
  }
  
  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }
  
  render() {
    const { email, password, passwordConfirmation, name, } = this.state;
    
    return (
      <Segment basic>
        <Header as='h1' textAlign='center'>(icon) Choredom</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Name"
            autoFocus
            required     
            name='name'
            value={name}
            placeholder='Name'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Email"
            required
            autoFocus
            name='email'
            value={email}
            placeholder='Email'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password"
            required
            name='password'
            value={password}
            placeholder='Password'
            type='password'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password Confirmation"
            required
            name='passwordConfirmation'
            value={passwordConfirmation}
            placeholder='Password Confirmation'
            type='password'
            onChange={this.handleChange}
          />
          
          <Segment textAlign='left' basic>
            <Button primary type='submit'>Register</Button>
          </Segment>
          <Segment textAlign='center' basic>
            <Button as={Link} to="/adminregister">
              Register as an Admin
            </Button>
            <Button as={Link} to="/login">
              I already have an account
            </Button>
          </Segment>
        </Form>
      </Segment>
    )
  }
}

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Register { ...this.props } auth={auth} /> }
      </AuthConsumer>
    )
  }
}
