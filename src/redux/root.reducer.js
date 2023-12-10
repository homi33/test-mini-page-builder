import { combineReducers } from "redux";

import savedStateReducer from "./state/state.reducer";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const rootReducer = combineReducers({
  savedState: savedStateReducer,
});

const persistConfig = {
  key: "mini-page-builder-almabase",
  storage: storage,
};

export default persistReducer(persistConfig, rootReducer);
