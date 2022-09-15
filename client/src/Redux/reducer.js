
const intialState = {
  dogs: [],
}

const rootReducer = (state = intialState, action) => {
  switch (action.type) {
    case "GET_ALL_DOGS":
      action.payload.forEach(element => {
        if (!element.temperaments[0]) {
          element.temperaments[0] = "no-temperaments" //eliminamos arreglos vacios de temperamentos
        }
      });
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