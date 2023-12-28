// import axios from "axios";

export const FETCH_USER_DATA_REQUEST = "FETCH_USER_DATA_REQUEST";
export const FETCH_USER_DATA_SUCCESS = "FETCH_USER_DATA_SUCCESS";
export const FETCH_USER_DATA_FAILURE = "FETCH_USER_DATA_FAILURE";
export const fetchUserDataRequest = () => ({
  type: "FETCH_USER_DATA_REQUEST",
});

export const fetchUserDataSuccess = (userData) => {
  console.log(userData, "from actiions");
  localStorage.setItem("userData", JSON.stringify(userData));
  return {
    type: FETCH_USER_DATA_SUCCESS,
    payload: userData,
  };
};
export const fetchUserDataFailure = (error) => ({
  type: FETCH_USER_DATA_FAILURE,
  payload: error,
});
