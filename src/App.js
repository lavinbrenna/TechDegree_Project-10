import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
//import routes
import Header from './components/Header';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SignOut from './components/SignOut';
//import CourseIndex from './components/CourseIndex';
import withContext from './Context';


//context variables
const HeaderWithContext = withContext(Header);
const SignInWithContext = withContext(SignIn);
const SignUpWithContext = withContext(SignUp);
const SignOutWithContext = withContext(SignOut);


export default () => (
  <Router>
    <div>
      <HeaderWithContext/>
      <Switch>
      <Route path ="/signin" component ={SignInWithContext}/>
      <Route path ="/signup" component = {SignUpWithContext}/>
      <Route path ="/signout" component ={SignOutWithContext}/>
      </Switch>
      </div>
  </Router>
);

