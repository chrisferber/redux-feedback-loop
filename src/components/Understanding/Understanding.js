import React, { Component } from 'react';
// import axios from 'axios';
import { HashRouter as Router, Link } from 'react-router-dom';


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

export default Understanding;