import React, { Component } from 'react';
// import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


class Understanding extends Component {

    state = {
        toSupported: false,
        understanding: '',
    }

    catchInput = (event) => {
        this.setState({
            ...this.state,
            understanding: event.target.value,
        })
    }

    handleNextButtonClick = () => {
        if (this.state.understanding === '' || this.state.understanding < 0 || this.state.understanding > 5) {
            alert('Invalid input, please enter a number 0-5');
        } else {
            this.props.dispatch({ type: 'UNDERSTANDING_RATING', payload: this.state.understanding });
            this.setState({ toSupported: true });
        }
    }

    render() {

        if (this.state.toSupported === true) {
            return <Redirect to='/supported' />
        }

        return (
            <>
                <div className="Understanding">
                    <p>How well are you understanding the content?</p>
                    <input onChange={this.catchInput} type="number" placeholder="rating (0-5)" value={this.state.understanding} />
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

export default connect(mapReduxStateToProps)(Understanding);