import { SavedStateActionTypes } from "./state.types";

const setCurrentSavedState = (savedState) => {
  return {
    type: SavedStateActionTypes.SET_CURRENT_SAVEDSTATE,
    payload: savedState,
  };
};

export { setCurrentSavedState };
