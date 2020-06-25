import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './components/shared/Home';
import Navbar from './components/shared/Navbar';
import NoMatch from './components/shared/NoMatch';
import AccountProfile from './components/accounts/AccountProfile';
const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/profile' component={AccountProfile} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
)
export default App;
