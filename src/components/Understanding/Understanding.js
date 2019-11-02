import React, { Component } from 'react';
// import axios from 'axios';
import { HashRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Understanding extends Component {
    render() {
        return (
            <>
                <div className="Understanding">
                    <h1>Understanding!</h1>
                </div>
                <Router>
                    <div>
                        <button>
                            <Link to="/supported">Next</Link>
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

export default connect(mapReduxStateToProps)(Understanding);