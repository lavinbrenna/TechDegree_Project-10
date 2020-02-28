import React from 'react';
import { Link } from 'react-router-dom';

//create Header Class based on React Authentication Workshop
//first find the context for the header information
//create the authenticated user based on context
//create the header div, with sign in and sign out options using
//react.fragments or nested child elements.

export default class Header extends React.PureComponent {
  render (){
    const { context } = this.props;
    const authUser = context.authenticatedUser;
    return(
      <div className = "header">
        <div className = "bounds">
          <h1 className = "header--logo">Courses</h1>
          <nav>
          {authUser?
          <React.Fragment>
            <span>Welcome {authUser.name}!</span>
            <Link className = "signout" to="/signout">Sign Out</Link>
          </React.Fragment>
          :
          <React.Fragment>
            <Link className = "signup" to = "/signup">Sign Up</Link>
            <Link className = "signin" to ="/signin">Sign In</Link>
          </React.Fragment>
          }
          </nav>
        </div>
      </div>
    );
  }
};