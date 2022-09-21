


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
    case "ORDER_BY_NAME":
      const sortedName =
        action.payload === "A-Z"
          ? state.allDogs.sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            }
            if (b.name > a.name) {
              return -1;
            }
            return 0;
          })
          : state.allDogs.sort((a, b) => {
            if (a.name > b.name) {
              return -1;
            }
            if (b.name > a.name) {
              return 1;
            }
            return 0;
          });
      return {
        ...state,
        dogs: sortedName,
      };

    default:
      return state;
  }
};

export default rootReducer;