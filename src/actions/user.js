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
  return {
    type: actionTypes.LOGIN_FAILED
  };
};
export const login = userInfo => {
  return dispatch => {
    dispatch(startLogin());
    doLogin(userInfo).then(data => {
      if (data.data.code === 200) {
        dispatch(loginSuccess(data.data.data));
      } else {
        dispatch(loginFailed());
      }
    });
  };
};
