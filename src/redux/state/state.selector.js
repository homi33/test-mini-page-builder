import { createSelector } from "reselect";

const selectSavedState = (state) => state.savedState;

const selectCurrentSavedState = createSelector(
  [selectSavedState],
  (savedState) => savedState.currentSavedState
);

export { selectCurrentSavedState };
