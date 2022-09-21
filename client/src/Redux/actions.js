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

// export function getTemperaments() {
//     return async function (dispatch) {
//         var json = await axios.get(`/temperament`); //axios.get(`${urlMyApi}/temperament`)
//         return dispatch({
//             type: "GET_TEMPERAMENTS",
//             payload: json.data,
//         });
//       }  
//   };

export function showDogDetails(id) {
    return async function (dispatch) {
        let res = await axios.get(`http://localhost:3001/dogs/${id}`)
        return dispatch({
            type: "SHOW_DOG_DETAILS",
            payload: res.data
        });

    }

};

export function getDogByName(payload) {//dogs by name
    return async function (dispatch) {//Dispatch que podemos usar gracias a la asincronia provista por el middleware 
        try {
            var json = await axios.get(`http://localhost:3001/dogs?name=${payload}`) //axios.get(`${urlMyApi}/dogs?name=${payload}`)
            return dispatch({
                type: "GET_DOG",
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
};

// /dogs?name=${payload}`