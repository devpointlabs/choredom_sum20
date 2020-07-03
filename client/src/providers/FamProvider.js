import React from "react";
import axios from "axios";

const FamContext = React.createContext()
export const FamUser = FamContext.User;

export class FamProvider extends React.Component {
  state = {fams: {}};

  handleRegister = (user, history) => {
    axios.post("/api/auth", user)
      .then( res => {
        this.setState({ user: res.data.data,});
        history.push("/");
      })
    .catch( res => {
      console.log(res);
    })
  }

  handleLogin = (user, history) => {
    axios.post("/api/auth/sign_in", user)
      .then( res => {
        this.setState({ user: res.data.data, });
        history.push("/");
      })
      .catch( res => {
        console.log(res);
      })
    }

    handleLogout = (history) => {
      axios.delete("/api/auth/sign_out")
        .then( res => {
          this.setState({ user: null, });
          history.push('/login');
        })
        .catch( res => {
          console.log(res);
        })
    }

    render() {
      return (
        <FamContext.Provider value={{
          ...this.state,
          authenticated: this.state.user !==null,
          handleRegister: this.handleRegister,
          handleLogin: this.handleLogin,
          handleLogout: this.handleLogout,
          setUser: (user) => this.setState({user, }),
        }}>
          { this.props.children }
        </FamContext.Provider>
      )
    }
  };

export default FamProvider;