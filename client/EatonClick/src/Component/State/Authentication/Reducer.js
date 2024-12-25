const initialState = {
  user: null,
  loading: false,
  error: null,
  jwt: null,
  favorites: [],
  sucess: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_REQUEST":
    case "LOGIN_REQUEST":
    case "GET_USER_REQUEST":
    case "ADD_TO_FAVOURITE_REQUEST":
      return {
        ...state,
        loading: true,
        sucess: null,
        error: null,
      };
    case "REGISTER_SUCCESS":
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        jwt: action.payload,
        sucess: "register sucessfylly",
        error: null,
      };
    case "ADD_TO_FAVOURITE_SUCCESS":
      return {
        ...state,
        loading: false,
        favorites: isPresentInFavourites(state.favorites, action.payload)
          ? state.favorites.filter((item) => item.id !== action.payload.id)
          : [action.payload, ...state.favorites],
        sucess: null,
        error: null,
      };

    default:
      return state;
  }
};
export default authReducer;
