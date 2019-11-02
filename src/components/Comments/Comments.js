import React, { Component } from 'react';
// import axios from 'axios';
import { HashRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Comments extends Component {
    render() {
        return (
            <>
                <div className="Comments">
                    <h1>Comments!</h1>
                </div>
                <Router>
                    <div>
                        <button>
                            <Link to="/thankyou">Next</Link>
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

export default connect(mapReduxStateToProps)(Comments);