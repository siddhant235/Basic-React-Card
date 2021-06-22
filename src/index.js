import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {persistStore,persistReducer} from 'redux-persist';
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import AddUserReducer from './store/reducers/AdUserReducer'
import storage from 'redux-persist/lib/storage'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const RootReducer =combineReducers({
  user:AddUserReducer
})
const persistConfig={
  key:'root',
  storage,
  blacklist:[]
}
const pReducer=persistReducer(persistConfig,RootReducer)
const store=createStore(pReducer,composeEnhancers(applyMiddleware(thunk)))
const persistor=persistStore(store)
export {persistor,store}
ReactDOM.render(

    <Provider store={store}>
    <App />
    </Provider>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
