import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Thankyou from '../Thankyou/Thankyou';
import Admin from '../Admin/Admin';

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br />
        </div>
        <Router>
          <div className="routes">
            <Route exact path="/">
              <Feeling />
            </Route>
            <Route path="/understanding">
              <Understanding />
            </Route>
            <Route path="/supported">
              <Supported />
            </Route>
            <Route path="/comments">
              <Comments />
            </Route>
            <Route path="/thankyou">
              <Thankyou />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
