import axios from "axios"
export const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL: "http://sudazon.herokuapp.com/api",
});
// export const PF = "http://localhost:8000"
// export const PF = "https://sudanzon.herokuapp.com/"
