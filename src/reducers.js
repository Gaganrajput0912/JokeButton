// reducers.js
import jokes from "./jokes";

const initialState = {
  selectedCategory: "",
  jokes,
  showOverlay: false,
  currentJokeIndex: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_CATEGORY":
      return {
        ...state,
        selectedCategory: action.payload,
        showOverlay: true,
        currentJokeIndex: 0,
      };
    case "CLOSE_OVERLAY":
      return {
        ...state,
        selectedCategory: "",
        showOverlay: false,
      };
    case "NEXT_JOKE":
      return {
        ...state,
        currentJokeIndex:
          (state.currentJokeIndex + 1) %
          state.jokes[state.selectedCategory].length,
      };
    default:
      return state;
  }
};

export default rootReducer;
