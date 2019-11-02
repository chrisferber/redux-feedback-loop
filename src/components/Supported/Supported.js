import React, { Component } from 'react';
// import axios from 'axios';
import { HashRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Supported extends Component {
    render() {
        return (
            <>
                <div className="Supported">
                    <h1>Supported!</h1>
                </div>
                <Router>
                    <div>
                        <button>
                            <Link to="/comments">Next</Link>
                        </button>
                    </div>
                </Router>
            </>
        );
    }
}

const mapReduxStateToProps = (ReduxState) => {
    return ReduxState;
  }

export default connect(mapReduxStateToProps)(Supported);