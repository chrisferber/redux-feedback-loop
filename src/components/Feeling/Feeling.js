import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Feeling extends Component {

    state = {
        toUnderstanding: false,
        feeling: '',
    }

    catchInput = (event) => {
        this.setState({
            ...this.state,
            feeling: event.target.value,
        })
    }

    handleNextButtonClick = () => {
        if (this.state.feeling === '' || this.state.feeling < 0 || this.state.feeling > 5) {
            alert('Invalid input, please enter a number 0-5');
        } else {
            this.props.dispatch({ type: 'FEELING_RATING', payload: this.state.feeling });
            this.setState({ toUnderstanding: true });
        }
    }

    render() {

        if (this.state.toUnderstanding === true) {
            return <Redirect to='/understanding' />
        }

        return (
            <>
                <div className="Feeling">
                    <p>How are you feeling today?</p>
                    <input onChange={this.catchInput} type="number" placeholder="rating (0-5)" value={this.state.feeling} />
                </div>
                <div>
                    <button onClick={this.handleNextButtonClick} >
                        Next
                        </button>
                </div>
            </>
        );
    }
}

const mapReduxStateToProps = (ReduxState) => {
    return ReduxState;
}

export default connect(mapReduxStateToProps)(Feeling);