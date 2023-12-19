import axios from "axios";
import { server_URL } from "../constants";
const API = axios.create({
  // Configuration
  baseURL: server_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
