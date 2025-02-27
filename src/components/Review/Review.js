import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Review extends Component {

    handleSubmitButtonClick = () => {
        axios({
            method: 'POST',
            url: '/submit',
            data: this.props.catchRatings,
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
            alert('Sorry, feedback was unable to be submitted at this time. Please try again later.')
        })

    }

    render() {
        return (
            <>
                <div className="Review">
                    <span>
                        <h3>Review Your Feedback</h3>
                    </span>
                    <ul>
                        <li>
                            Feeling: {this.props.catchRatings.feeling}
                        </li>
                        <li>
                            Understanding: {this.props.catchRatings.understanding}
                        </li>
                        <li>
                            Supported: {this.props.catchRatings.support}
                        </li>
                        <li>
                            Comments: {this.props.catchRatings.comments}
                        </li>
                    </ul>
                </div>
                <Router>
                    <div>
                        <button onClick={this.handleSubmitButtonClick}>
                            <Link to="/thankyou">Submit Feedback</Link>
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

export default connect(mapReduxStateToProps)(Review);