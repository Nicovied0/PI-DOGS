


const intialState = {
  dogs: [],
  allDogs: [],
  details: [],
  loading: true
}

const rootReducer = (state = intialState, action) => {
  switch (action.type) {

    case "GET_ALL_DOGS":
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload,
      
      }

    case "GET_TEMPERAMENTS":
      let filteresTemp = action.payload.filter((temp) => temp.name !== ""); //eliminar razas con strings vacios
      return {
        ...state,
        temperaments: filteresTemp,
      };

    case "DOG_DETAILS":
      return {
        ...state,
        details: action.payload
      };

    case "GET_DOG_BY_NAME":
      return {
        ...state,
        dogs: action.payload
      };

    case "ORDER_BY_NAME":
      let orderByName =
        action.payload === "A-Z"
          ? state.dogs.sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            }
            if (b.name > a.name) {
              return -1;
            }
            return 0;
          })
          : state.dogs.sort((a, b) => {
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
        dogs: orderByName,
      };

    case "ORDER_BY_WEIGHT":
      let orderByWeight = action.payload === "MIN_WEIGHT" ? state.dogs.sort((a, b) => {
        if (parseInt(a.weight[1]) > parseInt(b.weight[1])) {
          return 1;
        }
        if (parseInt(b.weight[1]) > parseInt(a.weight[1])) {
          return -1;
        }
        return 0;
      })
        : state.dogs.sort((a, b) => {
          if (parseInt(a.weight[1]) > parseInt(b.weight[1])) {
            return -1;
          }
          if (parseInt(b.weight[1]) > parseInt(a.weight[1])) {
            return 1;
          }
          return 0;
        })
      return {
        ...state,
        dogs: orderByWeight
      }

    case "FILTER_BY_TEMPERAMENTS":
      let filterDogs = state.allDogs
      let dogsFilteredBT = filterDogs.filter((e) => { return e.temperaments.find((c) => { return c === action.payload}) })
      // console.log(filterDogs.filter(e => e.temperaments.find(e => {return e === action.payload})), 'spy fuilter')


      if (action.payload === 'ALL') {
        return {
          ...state,
          dogs: filterDogs
        }
      }
      return {
        ...state,
        dogs: dogsFilteredBT
      }

      case 'FILTER_BY_CREATED_DB':
        let filterDogsByDb = state.allDogs
        // console.log(filterDogs,"soy")
        let dogsFilertedBDB = action.payload === 'ALL' ? filterDogsByDb : filterDogsByDb.filter(el => el.createdAt)
        if(action.payload === 'ALL'){
          return{
            ...state,
            dogs:filterDogsByDb
          }
        } 
        return{
          ...state,
          dogs:dogsFilertedBDB
        }


    case "SET_LOADING":
      if (action.payload === false) {
        return {
          ...state,
          loading: false
        }
      }
      else return {
        ...state,
        loading: true
      }

    case "REMOVE_DETAILS":
      return {
        ...state,
        allDogs: [],
        details: [],
      };

    default:
      return state;
  }
};

export default rootReducer;