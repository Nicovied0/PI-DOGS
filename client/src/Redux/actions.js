import axios from "axios";
// const urlMyApi = "http://localhost:3001";

export function getAllDogs() {
  return async function (dispatch) {
    var json = await axios.get(`http://localhost:3001/dogs`)
    return dispatch({//necesario para despachar la accion
      type: "GET_ALL_DOGS",
      payload: json.data
    });
  }

};

export function getTemperaments() {
  return async function (dispatch) {
    var json = await axios.get(`http://localhost:3001/temperaments`);
    return dispatch({
      type: "GET_TEMPERAMENTS",
      payload: json.data,
    });
  }
};

export function showDogDetails(id) {
  return async function (dispatch) {
    let res = await axios.get(`http://localhost:3001/dogs/${id}`)
    return dispatch({
      type: "DOG_DETAILS",
      payload: res.data
    });

  }

};


export function getDogByName(payload) {//dogs by name
  return async function (dispatch) {//Dispatch que podemos usar gracias a la asincronia provista por el middleware
    try {
      var json = await axios.get(`http://localhost:3001/dogs?name=${payload}`) //axios.get(`${urlMyApi}/dogs?name=${payload}`)
      return dispatch({
        type: "GET_DOG_BY_NAME",
        payload: json.data
      })
    } catch (error) {
      alert(`No country was found that includes "${payload}".`)
      console.log(error);
    }
  }
};
export function getDogByWeight(payload) {
  return {
    type: "ORDER_BY_WEIGHT",
    payload
  }
}


export function OrderByName(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload
  }
};

export function filterByTemperaments(payload){
  return {
    type: "FILTER_BY_TEMPERAMENTS",
    payload
  }
}



export function postDog(payload) {
  return async function () {
    const data = await axios.post("http://localhost:3001/dog", payload); //axios.post("http://localhost:3001/dog"
    return data;
  }
}


export function removeDetail() {
  return {
    type: "REMOVE_DETAILS",
  };
}


export function setLoading(payload) {
  return {
    type: "SET_LOADING",
    payload
  }
}