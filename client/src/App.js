import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from './components/Header';

export default () => (
  <Router>
    <div>
      <Header/>
      <Switch>
      <Route exact path ="/" component = {CourseIndex}/>
      </Switch>
      </div>
  </Router>
)