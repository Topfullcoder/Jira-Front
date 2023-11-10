import axios from "axios";
import { Dispatch } from "redux";
import {
  REGISTER_USER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  UserData,
  UserActionTypes,
} from "../types";
import { store } from "../store";
//Sync Action Creators

const http = process.env.REACT_APP_SERVER_URL;

export const registerRequest = (userData: UserData): UserActionTypes => ({
  type: REGISTER_USER,
  payload: userData,
});

export const registerSuccess = (userData: UserData): UserActionTypes => ({
  type: REGISTER_SUCCESS,
  payload: userData,
});

export const registerFailure = (error: string): UserActionTypes => ({
  type: REGISTER_FAILURE,
  payload: error,
});

//Async Action Creator with redux-thunk
export const registerUser = (userData: UserData) => {
  return async (dispatch: Dispatch<UserActionTypes>) => {
    store.dispatch(registerRequest(userData));
    try {
      const response: UserData = await axios.post(
        `${http}/api/v1/auth/signup`,
        userData
      );
      dispatch(registerSuccess(response));
    } catch (error: any) {
      if (error.response && error.response.data) {
        dispatch(
          registerFailure(error.response.data.message || "Unknown error")
        );
      } else {
        dispatch(registerFailure(error.message || "Unknown"));
      }
    }
  };
};
