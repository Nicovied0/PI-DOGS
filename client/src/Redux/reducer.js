


const intialState = {
  dogs: [],
  details: [],  
}

const rootReducer = (state = intialState, action) => {
  switch (action.type) {
    case "GET_ALL_DOGS":
      return {
        ...state,
        dogs: action.payload,
        
      }
      case "SHOW_DOG_DETAILS":
      let myDetails = action.payload
      
      return {
        ...state,
        details: myDetails
      };
    default:
      return state;
  }
};

export default rootReducer;