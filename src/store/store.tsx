import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import Logger from "redux-logger";

import rootReducer from "../redusers/rootReducer";

const middlewares = [Logger];

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares))
);

export default store;
