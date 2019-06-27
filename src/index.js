import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {showReducer} from "./App/reducers/showReducers";
import { singleShowReducer } from "./App/reducers/showInfoReducer";
import {SearchedShows} from "./App/reducers/ShowSearchedReducer";

const rootReducer = combineReducers({
    show: showReducer,
    showInfo: singleShowReducer,
    searchedShow: SearchedShows
})

const composeEnhancers  = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk), compose));

ReactDOM.render(
    <Provider store={store}>
    <HashRouter>
<App />
</HashRouter>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
