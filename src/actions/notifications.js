import actionTypes from "./actionTypes";

export const markNotificationAsReadById=(id)=>{
    return dispatch=>{
        // 模拟服务端请求
        setTimeout(()=>{
            dispatch({
                 type:actionTypes.MARK_NOTIFICATION_AS_READ_BY_ID,
                 payload:{
                     id
                 }
            })
        },2000)
    }    
}
export const markAllNotificatioNsAsRead=()=>{
    return dispatch=>{
        // 模拟服务端请求
        setTimeout(()=>{
            dispatch({
                 type:actionTypes.MARK_ALL_NOTIFICATIONs_AS_READ
            })
        },2000)
    }    
}