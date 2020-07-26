import React from 'react';
import { AuthConsumer, } from "../../providers/AuthProvider";
import { LogoContainer, LoginContainer, LogoImg, Btn, Input, InputLabel, RegisterBtn, RegisterBtnContainer } from '../styledComp/LoginStyles';
import {  Segment, Grid } from 'semantic-ui-react';
import Logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  state = { email: '', password: '' }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, } = this.state;
    this.props.auth.handleLogin({ email, password, }, this.props.history);
  }
  
  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  render() {
    const { email, password, } = this.state;
  
    return (
      <>
        <Grid centered columns={2} divided>
            <Grid.Column>
                  <LoginContainer onSubmit={this.handleSubmit}>
                    <LogoContainer>
                      <LogoImg src={Logo} />
                    </LogoContainer>
                  <InputLabel position='left'>
                    Email
                  </InputLabel>
                    <Input
                      label="Email"
                      autoFocus
                      required         
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
                    <Segment basic textAlign='left'>
                      <Btn>Log In</Btn>
                    </Segment>
                    <RegisterBtnContainer>
                      <Link to="/register">
                        <RegisterBtn type="button">I don't have an account </RegisterBtn>
                      </Link>
                    </RegisterBtnContainer>
                  </LoginContainer>
            </Grid.Column>
        </Grid>
      </>
    )
  }
}

export default class ConnectedLogin extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>

    )
  }
}
