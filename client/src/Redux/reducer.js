


const intialState = {
  dogs: [],
  details: []
}

const rootReducer = (state = intialState, action) => {
  switch (action.type) {
    case "GET_ALL_DOGS":
      return {
        ...state,
        dogs: action.payload,
        
      }
      case "SHOW_DOG_DETAILS":
      return {
        ...state,
        details: action.payload
      };
      case "GET_DOG":
      return {
        ...state,
        dogs: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;