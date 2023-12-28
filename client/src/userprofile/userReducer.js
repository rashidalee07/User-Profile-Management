import { FETCH_USER_DATA_SUCCESS } from "./userActions";

const storedUserData = JSON.parse(localStorage.getItem("userData"));

const initialState = {
  user: storedUserData || null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
