import { ThunkAction } from "redux-thunk";
import { AppState } from "../store";
import { AnyAction, Dispatch } from "redux";
import config from "./../../config/";
import axios from "axios";

export const API_USERLIST = "API_USERLIST";

const token = config();

const http = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const userList = async () => {
  try {
    console.log("token\n", token);
    console.log("http\n", http);
    const response = await http.get("/api/v1/users/list");
    console.log("response", response);
  } catch (err: any) {
    console.log("Err", err);
  }
};
