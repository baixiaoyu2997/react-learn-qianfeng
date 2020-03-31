const initState = [
    {
        id:1,
        title:'Apple',
        price:8888.66,
        amount:10
    },{
        id:2,
        title:'Orange',
        price:4444.66,
        amount:12
    }
];
  export default (state = initState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  