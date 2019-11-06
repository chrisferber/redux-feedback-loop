import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Thankyou extends Component {

    state = {
        newSurvey: false,
    }

    resetFeedback = () => {
            this.props.dispatch({ type: 'RESET_FEEDBACK'});
            this.setState({ newSurvey: true });
        }

    render() {

        if (this.state.newSurvey === true) {
            return <Redirect to='/' />
        }

        return (
            <>
                <div className="Thankyou">
                    <h2>Thank you!</h2>
                    <p>Your feedback has been submitted successfully.</p>
                </div>
                <div>
                    <button onClick={this.resetFeedback} >
                    Create New Feedback
                        </button>
                </div>
            </>
        );
    }
}

const mapReduxStateToProps = (ReduxState) => {
    return ReduxState;
}

export default connect(mapReduxStateToProps)(Thankyou);