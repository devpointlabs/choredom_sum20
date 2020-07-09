import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from "semantic-ui-react";
import Home from './components/shared/Home';
import Register from './components/auth/Register';
import Initial from './components/shared/Initial';
import Login from './components/auth/Login';
import Navbar from './components/shared/Navbar';
import NoMatch from './components/shared/NoMatch';
import FetchUser from './components/auth/FetchUser';
import AdminDash from './components/shared/AdminDash';
import Tasks from './components/tasks/Tasks';
import Rewards from './components/rewards/Reward';
import Fams from './components/fams/Fams';
import FamShow from './components/fams/FamShow'
import FamForm from './components/fams/FamForm';
import ProtectedRoute from './components/auth/ProtectedRoute';

const App = () => (
  <>
    <Navbar/>
      <FetchUser>
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} /> 
            <Route exact path="/register" component={Register} />
            <ProtectedRoute exact path='/initial' component={Initial} /> 
            <ProtectedRoute exact path='/admindash' component={AdminDash} /> 
            <ProtectedRoute exact path='/familyform' component={FamForm} /> 
            <ProtectedRoute exact path='/rewards' component={Rewards} /> 
            <ProtectedRoute exact path="/tasks" component={Tasks} />
            <Route exact path="/fams" component={Fams} /> 
            <Route exact path='/fams/:id' component={FamShow} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </FetchUser>
  </>
)

export default App;

