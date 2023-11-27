import { ThunkAction } from "redux-thunk";
import { AppState } from "../store";
import { AnyAction, Dispatch } from "redux";
import { getUserAccessToken } from "./../../config/";
import { CreatePro } from "../../Types/CreateProject";
import axios from "axios";

export const API_USERLIST = "API_USERLIST";

const token = getUserAccessToken();

const http = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const userList = async () => {
  try {
    const response = await http.get("/api/v1/users/list");
    return response.data;
  } catch (err: any) {
    console.log("Err", err);
  }
};

export const CreateProject = async (project: CreatePro) => {
  try {
    const response = await http.post("/api/v1/tickets/add/1", project);
    return true;
  } catch (err: any) {
    console.log("Err", err);
    return false;
  }
};

interface Stage {
  id: number;
  stage: string;
}

export const getStageList = async () => {
  try {
    const response = await http.get("api/v1/stages/list");
    const sortedData = response.data.sort((a: Stage, b: Stage) => a.id - b.id);
    return sortedData;
  } catch (err: any) {
    console.log("Err", err);
  }
};

export const getTicketList = async () => {
  try {
    const response = await http.get("api/v1/tickets/list");
    console.log(response);
    return response;
  } catch (err: any) {
    console.log("Err", err);
  }
};
