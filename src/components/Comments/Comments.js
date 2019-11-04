import React, { Component } from 'react';
// import axios from 'axios';
import { HashRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Comments extends Component {

    state = {
        submission: {
            ratingType: 'Comments',
            rating: '',
        }
    }

    catchInput = (event) => {
        this.setState({
            submission: {
                ...this.state.submission,
                rating: event.target.value,
            }
        })
    }

    handleNextButtonClick = () => {
        this.props.dispatch({ type: 'FEELING_RATING', payload: this.state.submission });
    }

    render() {
        return (
            <>
                <div className="Comments">
                    <p>Any comments you want to leave?</p>
                    <input onChange={this.catchInput} type="text" placeholder="Optional" value={this.state.submission.rating} />
                </div>
                <Router>
                    <div>
                        <button onClick={this.handleNextButtonClick}>
                            <Link to="/review">Next</Link>
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