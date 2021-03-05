import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ShowDetail from './pages/ShowDetail';
import './App.less';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/nvc-test" />
        </Route>
        <Route path="/nvc-test/detail/:id">
          <ShowDetail />
        </Route>
        <Route exact path="/nvc-test">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
