import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Supported extends Component {

    state = {
        toComments: false,
        support: '',
    }

    catchInput = (event) => {
        this.setState({
            ...this.state,
            support: event.target.value,
        })
    }

    handleNextButtonClick = () => {
        if (this.state.support === '' || this.state.support < 0 || this.state.support > 5) {
            alert('Invalid input, please enter a number 0-5');
        } else {
            this.props.dispatch({ type: 'SUPPORT_RATING', payload: this.state.support });
            this.setState({ toComments: true });
        }
    }

    render() {

        if (this.state.toComments === true) {
            return <Redirect to='/comments' />
        }

        return (
            <>
                <div className="Supported">
                    <p>How well are you being supported?</p>
                    <input onChange={this.catchInput} type="number" placeholder="rating (0-5)" value={this.state.supported} />
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

export default connect(mapReduxStateToProps)(Supported);