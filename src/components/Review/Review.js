import React, { Component } from 'react';
// import axios from 'axios';
import { HashRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Review extends Component {

    handleSubmitButtonClick = () => {

    }

    render() {
        return (
            <>
                <div className="Review">
                    <span>
                        <h3>Review Your Feedback</h3>
                    </span>
                    {this.props.catchRatings.map((rating, i) => {
                        return (
                            <div key={i}>{rating.ratingType}: {rating.rating}</div>
                        )
                    })}

                    {/* <p>{this.props.catchRatings.feelingRating}</p> */}
                </div>
                <Router>
                    <div>
                        <button onClick={this.handleSubmitButtonClick}>
                            <Link to="/thankyou">Submit Feedback</Link>
                        </button>
                    </div>
                </Router>
                {JSON.stringify(this.props, null, 2)}
            </>
        );
    }
}

const mapReduxStateToProps = (ReduxState) => {
    return ReduxState;
}

export default connect(mapReduxStateToProps)(Review);