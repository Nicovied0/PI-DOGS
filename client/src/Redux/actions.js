import axios from "axios";

export function getAllDogs() {
    return async function (dispatch) {
        var json = await axios(`http://localhost:3001/dogs`)
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