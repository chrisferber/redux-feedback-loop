import React, { Component } from 'react';
// import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


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

export default Comments;