import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios"; // Assuming you're using axios for API calls
import { redirect, useNavigate } from "react-router-dom";

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

// Asynchronous thunk action creator
export const registerUser =
  (userData: UserData) => async (dispatch: Dispatch) => {
    dispatch(registerRequest());
    try {
      const response = await axios.post(`${http}/api/v1/auth/signup`, userData);
      if (response.status === 200 || response.status === 201) {
        dispatch(registerSuccess(response.data));
        return true; // Return true on success
      } else {
        dispatch(registerFailure("Unexpected response status"));
        return false; // Return false on failure
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || error.message || "An error occurred";
      dispatch(registerFailure(errorMessage));
      return false; // Return false on error
    }
  };
