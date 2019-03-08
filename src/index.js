import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {forecastReducer} from './reducers'
import AppContainer from './AppContainer'
import * as serviceWorker from './serviceWorker'
import './index.css'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(forecastReducer, /* preloadedState, */ composeEnhancers(
	   applyMiddleware(thunk)
))

ReactDOM.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>, 
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
