import React from 'react';
import { AuthConsumer, } from "../../providers/AuthProvider";
import { RegisterContainer, LogoContainer, LogoImg, RegisterInput, RegisterInputLabel, RegisterBtn, HaveAccountBtn, RegisterAdminBtn } from '../styledComp/RegisterStyles';
import { Segment, Grid} from 'semantic-ui-react';
import Logo from '../../images/Logo.svg';
import { Link, } from 'react-router-dom';

class Register extends React.Component {
  state = { name: '', email: '', password: '', passwordConfirmation: '' };
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, passwordConfirmation } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;

    if (password === passwordConfirmation)
      handleRegister({ name, email, password, passwordConfirmation, }, history);
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
    <Grid centered columns={2} divided>
      <Grid.Column>
          <RegisterContainer onSubmit={this.handleSubmit}>
            <LogoContainer>
              <LogoImg src={Logo} />
            </LogoContainer>
            <RegisterInputLabel position='left'>
              Name
            </RegisterInputLabel>
            <RegisterInput
              label="Name"
              autoFocus
              required     
              name='name'
              value={name}
              placeholder='Name'
              onChange={this.handleChange}
            />
            <RegisterInputLabel position='left'>
              Email
            </RegisterInputLabel>
            <RegisterInput
              label="Email"
              required
              autoFocus
              name='email'
              value={email}
              placeholder='Email'
              onChange={this.handleChange}
            />
            <RegisterInputLabel position='left'>
              Password
            </RegisterInputLabel>
            <RegisterInput
              label="Password"
              required
              name='password'
              value={password}
              placeholder='Password'
              type='password'
              onChange={this.handleChange}
            />
            <RegisterInputLabel position='left'>
              Password Confirmation
            </RegisterInputLabel>
            <RegisterInput
              label="Password Confirmation"
              required
              name='passwordConfirmation'
              value={passwordConfirmation}
              placeholder='Password Confirmation'
              type='password'
              onChange={this.handleChange}
            />

            <Segment textAlign='left' basic>
              <RegisterBtn primary type='submit'>Register</RegisterBtn>
            </Segment>

            <Segment textAlign='left' basic>
            <RegisterAdminBtn  as={Link} to="/adminregister">
              Register as an Admin
            </RegisterAdminBtn>
            </Segment>
            
            <Segment textAlign='left' basic>
            <HaveAccountBtn as={Link} to="/login">
              I already have an account
            </HaveAccountBtn>
            </Segment>
            
            </RegisterContainer>
          </Grid.Column>
      </Grid>
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
