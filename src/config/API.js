import axios from "axios";

export const API = axios.create({
  baseURL: "https://tools-app-backend.herokuapp.com/api/v1/",
});
