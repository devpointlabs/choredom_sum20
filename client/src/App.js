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
import TaskShow from './components/tasks/TaskShow';
import TaskForm from './components/tasks/TaskForm'
import Fams from './components/fams/Fams';
import FamShow from './components/fams/FamShow'
import FamForm from './components/fams/FamForm'
import Rewards from './components/rewards/Rewards';
import RewardShow from './components/rewards/RewardShow';
import RewardForm from './components/rewards/RewardForm';
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
            <ProtectedRoute exact path='/rewardform' component={RewardForm} />
            <ProtectedRoute exact path='/taskform' component={TaskForm} />
            <Route exact path="/tasks" component={Tasks} />
            <Route exact path='/tasks/:id' component={TaskShow} />
            <Route exact path="/rewards" component={Rewards} />
            <Route exact path='/rewards/:id' component={RewardShow} />
            <Route exact path="/fams" component={Fams} /> 
            <Route exact path='/fams/:id' component={FamShow} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </FetchUser>
  </>
)

export default App;

