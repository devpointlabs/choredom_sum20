import React from 'react';
import { AuthConsumer, } from "../../providers/AuthProvider";
import { Grid, Button, Segment, Header, } from 'semantic-ui-react';
import { RegisterForm, LogoContainer, LogoImg, Btn, Input, InputLabel, RegisterBtn, RegisterBtnContainer } from '../styledComp/AdminRegisterStyles';
import { Link, } from 'react-router-dom';
import Logo from '../../images/Logo.svg';


class AdminRegister extends React.Component {
  state = { name: '', email: '', password: '', passwordConfirmation: '', admin: true };
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, passwordConfirmation, admin } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;

    if (password === passwordConfirmation)
      handleRegister({ name, email, password, passwordConfirmation, admin }, history);
    else
      alert('Passwords Do Not Match!')
  }
  
  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }
  
  render() {
    const { email, password, passwordConfirmation, name } = this.state;
    
    return (
      <>
        <Grid centered columns={2} divided>
          <Grid.Column>
            <RegisterForm onSubmit={this.handleSubmit}>
              <LogoContainer>
                <LogoImg src={Logo} />
              </LogoContainer>
              <InputLabel position='left'>
                Name
              </InputLabel>
              <Input
                label="Name"
                autoFocus
                required     
                name='name'
                value={name}
                placeholder='Name'
                onChange={this.handleChange}
              />
              <InputLabel position='left'>
                    Email
              </InputLabel>
              <Input
                label="Email"
                required
                autoFocus
                name='email'
                value={email}
                placeholder='Email'
                onChange={this.handleChange}
              />
              <InputLabel position='left'>
                Password
              </InputLabel>
              <Input
                label="Password"
                required
                name='password'
                value={password}
                placeholder='Password'
                type='password'
                onChange={this.handleChange}
              />
              <InputLabel position='left'>
                Password Confirmation
              </InputLabel>
              <Input
                label="Password Confirmation"
                required
                name='passwordConfirmation'
                value={passwordConfirmation}
                placeholder='Password Confirmation'
                type='password'
                onChange={this.handleChange}
              />
              
              <Segment textAlign='left' basic>
                <Btn primary type='submit'>Register</Btn>
              </Segment>
              
              <RegisterBtnContainer>
                <RegisterBtn as={Link} to="/register">
                  Back to Normal Register
                </RegisterBtn>
              </RegisterBtnContainer>
            </RegisterForm>
          </Grid.Column>
        </Grid>
      </>
    )
  }
}

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <AdminRegister { ...this.props } auth={auth} /> }
      </AuthConsumer>
    )
  }
}
