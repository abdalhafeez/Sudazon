import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_SIGNUP_FAILURE,
  USER_SIGNUP_START,
  USER_SIGNUP_SUCCESS,
} from "../constants/userConstants"

export const userInfoReducer = (state = { token: "" }, action) => {
  const { type, payload } = action
  switch (type) {
    case USER_SIGNUP_START:
    case USER_LOGIN_START:
      return {
        ...state,
        loading: true,
        error: false,
      }
    case USER_SIGNUP_SUCCESS:
    case USER_LOGIN_SUCCESS:
      localStorage.setItem("token", payload)
      return {
        ...state,
        token: payload,
        loading: false,
        error: false,
      }
    case USER_SIGNUP_FAILURE:
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        token: null,
        loading: false,
        error: payload,
      }
    case USER_LOGOUT:
      localStorage.removeItem("token")
      return {
        ...state,
        token: null,
        loading: false,
        error: false,
      }

    default:
      return state
  }
}
