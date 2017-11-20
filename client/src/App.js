import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css';

//Custom Components
import Header from './components/Header' //Persistent navbar at top with options menu
import Jumbotron from './components/Jumbotron' //Hero image + login
import AppInfo from './components/AppInfo' //Details about the app to display on main screen
import Footer from './components/Footer'
import ClientPage from './components/ClientPage'//Main page for client accounts
import CorporatePage from './components/CorporatePage'//Main page for corporate accounts

class App extends Component {
  constructor() {
    super()
    this.state ={
      auth: false,
      user: null,
      accountType: null
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
        <Route path='/' component={Header} />
        <Route exact path='/' render={(props) => {
            return (
              this.state.auth && this.state.accountType ?
              this.state.accountType === 'corporate' ?
              <Redirect push to='/corporate' /> :
              <Redirect push to='/client' /> :
              <div>
                <Jumbotron />
                <AppInfo />
              </div>
            )
          }}
        />
        <Route exact path='/client' component={ClientPage} />
        <Route exact path='/corporate' component={CorporatePage} />
        <Route path='/' component={Footer} />
        </div>
      </Router>
    );
  }
}

export default App;
