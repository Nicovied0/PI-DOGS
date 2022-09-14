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
const getAllDogs = async () => {
  const infoApi = await getApi();
  const infoDb = await getDb();
  const infoAll = await infoApi.concat(infoDb)
  //const infoAll = [...infoApi,...infoDb]
  return infoAll
}





//Ruta get dogs

router.get('/dogs', async (req, res) => {
  try {
    const { name } = req.query; //requiero por body 
    const allInfo = await getAllDogs()

    if (name) {//si tengo un name desde body
      //filtro name en toda la info y compruebo que incluya ese nombre en mayuscula y minuscula
      const dog = allInfo.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))

      //si tengo el nombre, devuelvo la info, si no mando el error 
      dog ? res.status(200).send(dog) : res.status(404).send('error en dogs/name')

    } else {
      //si no paso nombre devuelvo toda la info
      res.send(allInfo)
    }

  } catch {
    res.status(404).send('error en get /dogs')
  }
})

router.get('/dogs/:id', async (req, res) => {
  try {
    const { id } = req.params
    const allDogs = await getAllDogs()
    const dogId = allDogs.filter(e => e.id == id)
    if (dogId.length) {
      res.status(200).send(dogId)
    } else {
      res.status(404).send('error en encontrar /Dog:id')
    }
  } catch {
    res.status(404).send('error en get /Dogs by id')
  }

})

//post dog
router.post("/dogs", async (req, res, next) => {
  const {
    name,
    height_min,
    height_max,
    weight_min,
    weight_max,
    life_span,
    image,
    temperaments,
  } = req.body;

  try {
    let dogCreated = await Dog.create({
      name,
      height_min,
      height_max,
      weight_min,
      weight_max,
      life_span,
      image: image ? image : "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/BLZJHTB27ZHUPKK3A7GXTMIEQA.jpg",
    });

    if (temperaments.length) {
      temperaments.map(async (tem) => {
        try {
          let temper = await Temperament.findOrCreate({ where: { name: tem } });
          dogCreated.addTemperament(temper[0]);
        } catch {
          console.log('error en find or create to temperament');
        }
      });
    }
    res.status(200).send("Dog creado!");
  } catch {
    res.status(404).send('Error en create dog');
  }
});


//Ruta get Temperaments
router.get('/temperaments', async (req, res) => {

  try {
    // Me traigo los Dogs de la api
    const temperamentApi = await axios(apiUrl)

    // Guardo en lista de temperamentos todos los resultados despues de aplicarle limpieza a cada uno con split
    const temperaments = temperamentApi.data.map(e => e.temperament)
    const temps = temperaments.toString().split(",");
    console.log(temps)

    // Encuentro o creo en el modelo de Temperamento, cada temperamento donde el nombre sea igual al dog en el que estoy en ese momento
    temps.forEach(el => {
      let i = el.trim()
      Temperament.findOrCreate({
        where: { name: i }
      })
    })

    const allTemp = await Temperament.findAll(); // Me traigo todos los temperamentos de la base de datos
    res.status(200).send(allTemp);
  } catch {
    res.status(404).send('error en temperaments')
  }
});

module.exports = router;