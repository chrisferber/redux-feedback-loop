import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Review extends Component {

    state = {
        student: {
            feelingRating: '',
            understandingRating: '',
            supportRating: '',
            comments: '',
        }
    }

    // componentDidMount = () => {
    //     createStudentObject();
    // }

    // createStudentObject = () => {

    //     this.props.catchRatings.map((rating, i) => {
    //         if (rating.ratingType === 'Feelings') {
    //             this.setState({
    //                 student: {
    //                     ...this.state.student,
    //                     feelingRating: rating.rating,
    //                 }
    //             })
    //         } else if (rating.ratingType === 'Understanding') {
    //             this.setState({
    //                 student: {
    //                     ...this.state.student,
    //                     understandingRating: rating.rating,
    //                 }
    //             })
    //         }
    //     })
    // }

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
                {JSON.stringify(this.state, null, 2)}
            </>
        );
    }
}

const mapReduxStateToProps = (ReduxState) => {
    return ReduxState;
}

export default connect(mapReduxStateToProps)(Review);