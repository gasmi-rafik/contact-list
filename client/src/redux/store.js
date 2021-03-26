import { createStore , applyMiddleware , compose} from "redux"

import {reducer} from "./reducer/reducer"

import thunk from "redux-thunk"

const middleware =[thunk]

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(reducer , composeEnhancers(applyMiddleware(...middleware)))