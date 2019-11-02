import React, { Component } from 'react';
// import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Feeling extends Component {
  render() {
    return (
        <>
      <div className="Feeling">
          <h1>Feeling!</h1>
      </div>
      <Router>
          <div>
            <button>
              <Link to="/understanding">Next</Link>
            </button>
          </div>
        </Router>
      </>
    );
  }
}

export default Feeling;