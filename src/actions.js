// actions.js
export const selectCategory = (category) => {
  return {
    type: "SELECT_CATEGORY",
    payload: category,
  };
};

export const closeOverlay = () => {
  return {
    type: "CLOSE_OVERLAY",
  };
};
