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
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this)
    this.logout = this.logout.bind(this)
  }

  logout() {
    fetch('http://localhost:3003/api/auth/logout', {
      credentials: 'include',
    }).then(res => res.json())
      .then(res => {
        this.setState({
          auth: res.auth,
        })
      }).catch(err => console.log(err));
  }

  handleLoginSubmit(e, data) {
    e.preventDefault();
    fetch('http://localhost:3003/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data)
    }).then(res => res.json())
        .then(res => {
        console.log(res);
        this.setState({
            auth: res.auth,
            user: res.ata.user,
    })
    }).catch(err => console.log(err));
  }

  handleRegisterSubmit(e, data) {
    e.preventDefault();
    fetch('http://localhost:3003/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          auth: res.auth,
          user: res.data.user,
        })
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <Router>
        <div className="App">
        <Route path='/' render={(props) => {
          return (
            <Header logout={this.logout} />
          )
        }} />
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
        <Route exact path='/client' render={(props) => {
          return (
            this.state.auth && this.state.accountType === 'client' ?
            <ClientPage /> :
              <div>
                <Jumbotron
                  handleLoginSubmit={this.handleLoginSubmit}
                  handleRegisterSubmit={this.handleRegisterSubmit}
                />
                <AppInfo />
              </div>
          )
        }} />
        <Route exact path='/corporate' render={(props) => {
          return (
            this.state.auth && this.state.accountType === 'corporate' ?
            <CorporatePage /> :
            <div>
              <Jumbotron
                handleLoginSubmit={this.handleLoginSubmit}
                handleRegisterSubmit={this.handleRegisterSubmit}
              />
              <AppInfo />
            </div>
          )
        }} />
        <Route path='/' component={Footer} />
        </div>
      </Router>
    );
  }
}

export default App;
