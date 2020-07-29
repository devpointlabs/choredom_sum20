import React, { Component } from 'react';
import axios from 'axios';

const AuthContext = React.createContext()
export const AuthConsumer = AuthContext.Consumer

class AuthProvider extends Component {
  state = { user: null }
  handleRegister = (user, history) => {
    axios.post('/api/auth', user)
      .then( res => {
        this.setState({ user: res.data.data })
        history.push("/initial")
      })
      .catch( err => {
        console.log(err)
      })
  }

  handleLogin = (user, history) => {
    axios.post('/api/auth/sign_in', user)
      .then( res => {
        this.setState({ user: res.data.data })
        if(user.admin) {
          history.push("/admindash")
        } else {
          history.push("/userdash")
        }
        
      })
      .catch( err => {
        console.log(err)
      })
  }

  handleLogout = (history) => {
    axios.delete('/api/auth/sign_out')
      .then( res => {
        this.setState({ user: null })
        history.push("/login")
      })
      .catch( err => {
        console.log(err)
      })
  }

  updateUser = (id, user) => {
    let data = new FormData();
    data.append('file', user.file);
    axios.put(`/api/users/${id}?name=${user.name}&email=${user.email}`, data)
      .then( res => this.setState({ user: res.data, }) )
  }

  addPoints = (id, points) => {
    axios.get(`/api/addpoints/${id}/${points}`)
    .then( res => this.setState({ user: res.data, }) )
    .catch( err => {
      console.log(err)
    })
  }

  subPoints = (id, points) => {
    axios.get(`/api/subpoints/${id}/${points}`)
    .then( res => this.setState({ user: res.data, }) )
    .catch( err => {
      console.log(err)
    })
  }

  userPoints = (id, points) => {
    axios.get(`/api/userpoints/${id}/${points}`)
    .then( res => this.setState({ user: res.data, }
    ) )
    .catch( err => {
      console.log(err)
    })
  }

  render() {
    return(
      <AuthContext.Provider value={{
        ...this.state, 
        authenticated: this.state.user !== null,
        handleRegister: this.handleRegister,
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout,
        setUser: (user) => this.setState({ user }),
        updateUser: this.updateUser,
        addPoints: this.addPoints,
        subPoints: this.subPoints,
        userPoints: this.userPoints,
      }}>
        { this.props.children }
      </AuthContext.Provider>
    )
  }
}

export default AuthProvider