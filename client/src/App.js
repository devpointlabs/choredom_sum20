import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from "semantic-ui-react";
import Home from './components/shared/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/shared/Navbar';
import NoMatch from './components/shared/NoMatch';
import FetchUser from './components/auth/FetchUser';
import Dash from './components/shared/Dashboard';
// import Tasks from './components/Tasks';
// import Rewards from './components/Rewards';
// import Fams from './components/Fams';
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
            <ProtectedRoute exact path='/dashboard' component={Dash} /> 
            {/* <Route exact path="/tasks" component={Tasks} />
            <Route exact path="/rewards" component={Rewards} />
            <Route exact path="/fams" component={Fams} />  */}
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </FetchUser>
  </>
)

export default App;

