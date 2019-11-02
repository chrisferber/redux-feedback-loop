import React, { Component } from 'react';
// import axios from 'axios';
import { HashRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Feeling extends Component {

    state = {
        submission: {
            question: 'feeling',
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
        console.log(this.state.submission);
        
    }

    handleNextButtonClick = () => {
        this.props.dispatch({type: 'FEELING_RATING', payload: this.state.submission});
    }

    render() {
        return (
            <>
                <div className="Feeling">
                    <p>How are you feeling today?</p>
                    <input onChange={this.catchInput} type="number" placeholder="rating" value={this.state.rating} />
                </div>
                <Router>
                    <div>
                        <button onClick={this.handleNextButtonClick} >
                            <Link to="/understanding">Next</Link>
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

export default connect(mapReduxStateToProps)(Feeling);