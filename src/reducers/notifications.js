import actionTypes from "../actions/actionTypes";

const initState = {
  isLoading: false,
  list: [
    {
      id: 1,
      title: "Lorem ipsum dolor sit",
      desc: "123123sdfsdfljkslfksdfsdlkfjsdklfsdjlfk123123",
      hasRead: false
    },
    {
      id: 2,
      title: "2Lorem ipsum dolor sit",
      desc: "222sdfsdfsdsdsdfsdsfs",
      hasRead: true
    }
  ]
};
export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.MARK_NOTIFICATION_AS_READ_BY_ID:
      const newList = state.list.map(item => {
        if (item.id === action.payload.id) item.hasRead = true;
        return item;
      });
      return {
        ...state,
        list: newList
      };
    case actionTypes.MARK_ALL_NOTIFICATIONs_AS_READ:
      return {
        ...state,
        list: state.list.map(item => {
          item.hasRead = true;
          return item;
        })
      };
    default:
      return state;
  }
};
