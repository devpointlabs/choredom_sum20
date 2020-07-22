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
import Profile from './components/auth/Profile';
import UserDash from './components/shared/UserDash';
import Earn from './components/tasks/Earn';
import Spend from './components/rewards/Spend';
import AdminRoute from './components/auth/AdminRoute';
import AdminRegister from './components/auth/AdminRegister';


const App = () => (
  <>
    <Navbar/>
      <FetchUser>
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <ProtectedRoute exact path='/profile' component={Profile} />
            <Route exact path="/login" component={Login} /> 
            <Route exact path="/register" component={Register} />
            <Route exact path="/adminregister" component={AdminRegister} />
            <ProtectedRoute exact path='/initial' component={Initial} /> 
            <AdminRoute exact path='/admindash' component={AdminDash} /> 
            <ProtectedRoute exact path='/userdash' component={UserDash} />
            <AdminRoute exact path='/familyform' component={FamForm} /> 
            <AdminRoute exact path='/rewardform' component={RewardForm} />
            <AdminRoute exact path='/taskform' component={TaskForm} />
            <AdminRoute exact path='/tasks/:id' component={TaskShow} />
            <AdminRoute exact path='/rewards/:id' component={RewardShow} />
            <AdminRoute exact path='/rewards' component={Rewards} /> 
            <AdminRoute exact path="/tasks" component={Tasks} />
            <Route exact path="/fams" component={Fams} /> 
            <Route exact path='/fams/:id' component={FamShow} />
            <ProtectedRoute exact path='/earn' component={Earn} />
            <ProtectedRoute exact path='/spend' component={Spend} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </FetchUser>
  </>
)

export default App;

