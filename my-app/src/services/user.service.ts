import axios from "axios";
import authHeader from "./auth-header";

const serverUrl = process.env.REACT_APP_SERVER_URL;

export const getPublicContent = () => {
  return axios.get(serverUrl + "all");
};

export const getUserBoard = () => {
  return axios.get(serverUrl + "user", { headers: authHeader() });
};

export const getModeratorBoard = () => {
  return axios.get(serverUrl + "mod", { headers: authHeader() });
};

export const getAdminBoard = () => {
  return axios.get(serverUrl + "admin", { headers: authHeader() });
};
