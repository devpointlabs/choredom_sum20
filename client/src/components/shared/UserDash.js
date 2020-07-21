import React from 'react';
import { Container, Button, Modal, Grid, Header } from 'semantic-ui-react';
import UserRewards from '../rewards/UserRewards';
import UserTasks from '../tasks/UserTasks'
import { AuthConsumer } from '../../providers/AuthProvider';

  class UserDash extends React.Component {
    render() {
      const { points } = this.props.user
      return (
        <>
         <h1>My Points</h1>
         <p> { Number(points) } </p>
        </>
      )
    }
  }

  const ConnectedUserDash = (props) => (
    <AuthConsumer>
      {
         values => (
        <UserDash {...props} {...values} />
      )}
    </AuthConsumer>
  )

export default ConnectedUserDash;