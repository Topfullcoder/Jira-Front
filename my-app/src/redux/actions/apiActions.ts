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

const initialProjectInfo: CreatePro = {
  title: "updated Ticket Title 21",
  description: "This is a sample description for the ticket 21.",
  acceptanceCriteria: "20:  Criteria details here",
  storyPoint: 5,
  stages: [{ id: 1 }],
  assignees: [{ id: 1 }],
  reporters: [{ id: 1 }],
  sprint: null,
  priority: "Medium",
  type: "Epic",
  parent: null,
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
