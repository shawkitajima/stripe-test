import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import TermsPage from '../../pages/TermsPage/TermsPage';
import Footer from '../../components/Footer/Footer';
import PrivacyPage from '../PrivacyPage/PrivacyPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }

  /*--- Callback Methods ---*/
  handleLogout = () => {
    userService.logout();
    this.setState({user: null})
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()})
  }
  /*--- Lifecycle Methods ---*/

  render() {
    return (
      <div className="main-content-holder">
        <NavBar 
        user={this.state.user} 
        handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path='/' render={() =>
            this.state.user ? (
              <div>Logged in baby!</div>
            ): (
              <div>Log in to get started!</div>
            )
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({history}) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/terms' render={({history}) => 
            <TermsPage
              history={history}
            />
          }/>
          <Route exact path='/privacy' render={({history}) => 
            <PrivacyPage
              history={history}
            />
          }/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
