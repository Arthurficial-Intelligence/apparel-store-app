import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import roodReducer from "./root-reducer";

//simple array that I can stick all of my middle ware into
const middlewares = [logger];

export const store = createStore(roodReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
