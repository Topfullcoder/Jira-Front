import { ThunkAction } from "redux-thunk";
import { AppState } from "../store";
import { AnyAction, Dispatch } from "redux";
import axios from "axios";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export interface LoginCredentials {
  username: string;
  password: string;
}

// Define action types
interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: string; // Assuming payload is a user token
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: string; // Error message
}

const http = process.env.REACT_APP_SERVER_URL;

// Combine the action types
export type UserActionTypes =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction;

// Thunk action creator for login
export const login =
  (credentials: LoginCredentials) => async (dispatch: Dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const response = await fetch(`${http}/api/v1/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();

      if (response.ok) {
        // Store the token in local storage
        localStorage.setItem("user", JSON.stringify(data));
        console.log(data);
        // Dispatch a success action
        dispatch({ type: LOGIN_SUCCESS, payload: data });
        return true;
      } else {
        // Dispatch an error action
        dispatch({ type: LOGIN_FAILURE, payload: data.message });
        return false;
      }
    } catch (error: any) {
      dispatch({ type: LOGIN_FAILURE, payload: error.message });
      return false;
    }
  };

export const logout = (): void => {
  localStorage.removeItem("user");
};
