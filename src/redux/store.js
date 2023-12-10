import { persistStore } from "redux-persist";
import { createStore, applyMiddleware } from "redux";

const { default: logger } = require("redux-logger");
const { default: rootReducer } = require("./root.reducer");

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { store, persistor };
