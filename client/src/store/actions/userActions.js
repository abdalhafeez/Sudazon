import { axiosInstance } from "../../utils/axiosInstance"
import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_SIGNUP_FAILURE,
  USER_SIGNUP_START,
  USER_SIGNUP_SUCCESS,
} from "../constants/userConstants"

export const registerUser = (data) => async (dispatch) => {
  dispatch({ type: USER_SIGNUP_START })
  try {
    const res = await axiosInstance.post("/auth/singup", data)
    console.log(res)
    dispatch({ type: USER_SIGNUP_SUCCESS, payload: res.data })
  } catch (error) {
    console.log(error)
    dispatch({
      type: USER_SIGNUP_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.errors
          : error.message,
    })
  }
}

export const loginUser = (data) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_START })
  try {
    const res = await axiosInstance.post("/auth/login", data)
    dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data })
  } catch (error) {
    console.log(error)
    dispatch({
      type: USER_LOGIN_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data
          : error.message,
    })
  }
}
