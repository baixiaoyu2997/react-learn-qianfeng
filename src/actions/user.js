import actionTypes from "./actionTypes";
import { doLogin } from "../requests";

const startLogin = () => {
  return {
    type: actionTypes.START_LOGIN
  };
};
const loginSuccess = userInfo => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: {
      userInfo
    }
  };
};
const loginFailed = () => {
  window.localStorage.removeItem("authToken");
  window.localStorage.removeItem("userInfo");
  window.sessionStorage.removeItem("authToken");
  window.sessionStorage.removeItem("userInfo");
  return {
    type: actionTypes.LOGIN_FAILED
  };
};
export const logout = () => {
  return dispatch => {
    dispatch(loginFailed());
  };
};
export const login = userInfo => {
  return dispatch => {
    dispatch(startLogin());
    doLogin(userInfo).then(data => {
      const { token, ...userInfo } = data.data.data;
      if (data.data.code === 200) {
        if (userInfo.remember) {
          window.localStorage.setItem("authToken", token);
          window.localStorage.setItem("userInfo", JSON.stringify(userInfo));
        } else {
          window.sessionStorage.setItem("authToken", token);
          window.sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
        }
        dispatch(loginSuccess(data.data.data));
      } else {
        dispatch(loginFailed());
      }
    });
  };
};
