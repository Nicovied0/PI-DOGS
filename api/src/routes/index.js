const { Router } = require('express');
const axios = require('axios');
const { API_KEY } = process.env
const {Dogs, Temperament} = require('../db')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



const apiUrl =  `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`


const getApi = async() =>{
  const apiData = await axios(apiUrl)
  console.log(apiData.data)
  const info = apiData.data.map(el =>{

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






//Function get dogs




router.get('/dogs', async (req, res) => {
  try {
    const allInfo = await getApi()
    res.send(allInfo)
  } catch {
    console.log('error en get /dogs')
  }
})


module.exports = router;