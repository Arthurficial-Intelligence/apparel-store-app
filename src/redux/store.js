import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import roodReducer from "./root-reducer";

//simple array that I can stick all of my middle ware into
const middlewares = [logger];

const store = createStore(roodReducer, applyMiddleware(...middlewares));

export default store;
