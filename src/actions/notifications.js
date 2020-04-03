import actionTypes from "./actionTypes";
import { getNotifications } from "../requests";
const startPost = () => {
  return {
    type: actionTypes.START_NOTIFICATION_POST
  };
};

const finishPost = () => {
  return {
    type: actionTypes.FINISH_NOTIFICATION_POST
  };
};
export const markNotificationAsReadById = id => {
  return dispatch => {
    dispatch(startPost());
    // 模拟服务端请求
    setTimeout(() => {
      dispatch({
        type: actionTypes.MARK_NOTIFICATION_AS_READ_BY_ID,
        payload: {
          id
        }
      });
      dispatch(finishPost());
    }, 2000);
  };
};
export const markAllNotificatioNsAsRead = () => {
  return dispatch => {
    dispatch(startPost());
    // 模拟服务端请求
    setTimeout(() => {
      dispatch({
        type: actionTypes.MARK_ALL_NOTIFICATIONs_AS_READ
      });
      dispatch(finishPost());
    }, 2000);
  };
};
export const getNotificationsList = () => {
  return dispatch => {
    dispatch(startPost());
    getNotifications().then(data => {
      dispatch({
        type: actionTypes.RECIVED_NOTIFICATIONS,
        payload: {
          list: data.list
        }
      });
      dispatch(finishPost());
    });
  };
};
