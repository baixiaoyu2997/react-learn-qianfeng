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
    default:
      return state;
  }
};
