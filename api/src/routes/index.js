const { Router } = require('express');
const axios = require('axios');
const { API_KEY } = process.env
const { Dog, Temperament } = require('../db')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



const apiUrl = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`


const getApi = async () => {
  const apiData = await axios(apiUrl)
  // console.log(apiData.data)
  const info = apiData.data.map(el => {

    let temperamentArray = [];
    if (el.temperament) {//pregunto que exista el temperamento y lo devuelvo en un arreglo
      temperamentArray = el.temperament.split(", ");
    }

    let heightArray = [];
    if (el.height.metric) {
      heightArray = el.height.metric.split(" - ");
    }

    let weightArray = [];
    if (el.weight.metric) {
      weightArray = el.weight.metric.split(" - ");
    }

    return {
      id: el.id,
      name: el.name,
      height: heightArray,
      weight: weightArray,
      temperaments: temperamentArray,
      life_span: el.life_span,
      image: el.image.url,

    }
  })
  return info
}


//-- Get data from the database posgrest--//
const getDb = async () => {
  return await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ['name'], //atributos que quiero traer del modelo Temperament, el id lo trae automatico
      through: {
          attributes: [],//traer mediante los atributos del modelo
      }
    }
  })
}

//combine data from API and database
const getAllDogs = async() =>{
  const infoApi = await getApi();
  const infoDb = await getDb();
  const infoAll = await infoApi.concat(infoDb)
  //const infoAll = [...infoApi,...infoDb]
  return infoAll
}





//Ruta get dogs

router.get('/dogs', async (req, res) => {
  try {
    const allInfo = await getAllDogs()
    res.send(allInfo)
  } catch {
    console.log('error en get /dogs')
  }
})


module.exports = router;