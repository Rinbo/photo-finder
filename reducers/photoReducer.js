export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_PHOTOS":
      return { ...state, [action.payload.id]: action.payload };
    case "FETCH_PHOTO":
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};