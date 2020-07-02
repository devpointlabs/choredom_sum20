import React from 'react';
import Home from './components/shared/Home';
// import NoMatch from './components/NoMatch';
  import ConnectedNavBar from './components/shared/NavMenu';
// import Login from './components/Login';
// import Register from './components/Register';
// import Tasks from './components/Tasks';
// import Rewards from './components/Rewards';
// import Fams from './components/Fams'
import { Switch, Route, } from 'react-router-dom';
// import { Container } from 'reactstrap';

const App = () => (
  <>
      <ConnectedNavBar/>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/login" component={Login} /> */}
        {/* <Route exact path="/register" component={Register} />
        <Route exact path="/tasks" component={Tasks} />
        <Route exact path="/rewards" component={Rewards} />
        <Route exact path="/fams" component={Fams} /> */}
        {/* <Route component={NoMatch} /> */}
      </Switch>
    
  </>
)

export default App;

