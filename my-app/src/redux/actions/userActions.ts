import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios"; // Assuming you're using axios for API calls
import { redirect } from "react-router-dom";

const http = process.env.REACT_APP_SERVER_URL;

// Define the types for your action strings
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

// Define the shape of the user data you expect
export interface UserData {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
}

// Define the User Action types
interface RegisterRequestAction {
  type: typeof REGISTER_REQUEST;
}

interface RegisterSuccessAction {
  type: typeof REGISTER_SUCCESS;
  payload: UserData;
}

interface RegisterFailureAction {
  type: typeof REGISTER_FAILURE;
  payload: string; // Assuming you are storing the error message as a string
}

// Combine the action types
export type UserActionTypes =
  | RegisterRequestAction
  | RegisterSuccessAction
  | RegisterFailureAction;

// Define the action creators
export const registerRequest = (): RegisterRequestAction => ({
  type: REGISTER_REQUEST,
});

export const registerSuccess = (userData: UserData): RegisterSuccessAction => ({
  type: REGISTER_SUCCESS,
  payload: userData,
});

export const registerFailure = (error: string): RegisterFailureAction => ({
  type: REGISTER_FAILURE,
  payload: error,
});

let err = false;
// Asynchronous thunk action creator
export const registerUser = (
  userData: UserData
): ThunkAction<void, any, null, UserActionTypes> => {
  return async (dispatch: Dispatch<UserActionTypes>) => {
    dispatch(registerRequest());

    try {
      // Replace with your actual API endpoint
      const response = await axios.post(`${http}/api/v1/auth/signup`, userData);
      dispatch(registerSuccess(response.data));
      console.log("response.data", response.data);
    } catch (error: any) {
      err = true;
      console.log("error.message", error.message);
      dispatch(registerFailure(error.message));
    } finally {
      if (err === false) {
        redirect("/");
        console.log("Please help me.");
      }
      console.log("err", err);
      if (err) err = false;
    }
  };
};
