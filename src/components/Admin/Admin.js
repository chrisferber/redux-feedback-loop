import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';



class Admin extends Component {
    render() {
        return (
            <div className="admin">
                <h1>Admin!</h1>
            </div>
        );
    }
}

const mapReduxStateToProps = (ReduxState) => {
    return ReduxState;
}

export default connect(mapReduxStateToProps)(Admin);