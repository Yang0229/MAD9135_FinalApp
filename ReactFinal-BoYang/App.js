//
//* Project Name: finalApp
//* Author: BO YANG (Tinker)
//* Data: 2018-01-10
//

import React from "react";

import thunk from "redux-thunk";

import {Provider} from "react-redux";
import Main from "./Main";

import {createStore, applyMiddleware,compose} from "redux";
import reducers from "./reducers";


let initialState = {};
const store = createStore(reducers, initialState, applyMiddleware(thunk));



export default class App extends React.Component {

  render() {

    return (
      <Provider store = {store} >
      <Main />
      </Provider>
    )
  }
}
