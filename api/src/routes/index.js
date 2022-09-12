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
  const data = await axios(apiUrl)
  console.log(data)
return data
}






//Function get dogs




router.get('/dogs', async (req, res) => {
  try {
    res.send(getApi())
  } catch {
    console.log('error en get /dogs')
  }
})


module.exports = router;