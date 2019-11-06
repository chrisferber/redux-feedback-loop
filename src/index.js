import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';
// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const catchRatings = (state = {}, action) => {
    if (action.type === 'FEELING_RATING') {
        return { ...state, feeling: action.payload };
    } else if (action.type === 'UNDERSTANDING_RATING') {
        return { ...state, understanding: action.payload };
    } else if (action.type === 'SUPPORT_RATING') {
        return { ...state, support: action.payload };
    } else if (action.type === 'COMMENTS') {
        return { ...state, comments: action.payload };
    } else if (action.type === 'RESET_FEEDBACK') {
        return {};
    }
    return state;
}

// create Redux store
const storeInstance = createStore(
    combineReducers({
        catchRatings,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
