
const intialState = {
  dogs: [],
}

const rootReducer = (state = intialState, action) => {
  switch (action.type) {
    case "GET_ALL_DOGS":
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload,
      };
      default:
      return state;
  }
};

export default rootReducer;