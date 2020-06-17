import React from 'react';

import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Main from './pages/Main';
import Details from './pages/Details';
import Header from './components/Header';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
