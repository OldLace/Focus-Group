import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

//Custom Components
import Header from './components/Header'
import Jumbotron from './components/Jumbotron' //Hero image + login

class App extends Component {
  constructor() {
    super()
    this.state ={
      auth: false,
      user: null
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
        <Route path='/' component={Header} />
        <Route exact path='/' render={(props) => {
            return (
              <Jumbotron
                user={this.state.user}
              />
            )
          }}
        />
        </div>
      </Router>
    );
  }
}

export default App;
