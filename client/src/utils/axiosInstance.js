import axios from "axios"
export const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL: "https://sudazon.herokuapp.com/api",
});
// export const PF = "http://localhost:5000";
export const PF = "https://sudanzon.herokuapp.com";
