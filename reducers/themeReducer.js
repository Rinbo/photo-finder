const INITIAL_STATE = {
  background: "light-grey",
  text: "black"
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DARK_THEME":
      return { ...state, background: "#333333", text: "white" };
    case "LIGHT_THEME":
      return { ...state, background: "light-grey", text: "black" };
    default:
      return state;
  }
};
