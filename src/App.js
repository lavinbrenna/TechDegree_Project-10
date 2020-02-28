import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
//import routes
import Header from './components/Header';
import CourseIndex from './components/CourseIndex';
import withContext from './Context';


//context variables
const HeaderWithContext = withContext(Header);


export default () => (
  <Router>
    <div>
      <HeaderWithContext/>
      <Switch>
      
      </Switch>
      </div>
  </Router>
);

