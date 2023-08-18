const axios = require("axios");
// const URL = 'https://rickandmortyapi.com/api/character'
require("dotenv").config();
const { URL } = process.env;

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios(`${URL}/${id}`);
    const { name, gender, species, origin, image, status } = data;
    const character = {id,name,gender,species,origin,image,status};

    name ? res.status(201).json(character)
    : res.status(404).json({message: 'not found'});
  }catch(error){
    res.status(500).json({message: error});
  }
}
module.exports = getCharById

//!Promises
// const getCharById = (req, res)=>{

//     const {id} = req.params
//     axios(`${URL}/${id}`)
//     .then(({data})=>{
//         const { id, name, gender, species, origin, image ,status} = data
//         const character = {id,name,gender,species,origin,image,status}

//         //*El status 200 ya viene automático, si quiero uno personalizado, debo aclararlo con .status(x)
//         return name ? res.json(character) //Es buena práctica poner un return, o sea, cortar la función, si es que tenemos varios condicionales. Acá no es necesario, solamente lo mostramos.
//         : res.status(404).json({message: 'Not found'})

//     })
//     .catch((error)=>{
//         res.status(500).json({message: error})
//     })
// }


//!HTTP
// const successHandler = (response, res)=>{
//     const { id, name, gender, species, origin, image ,status} = response.data
//     const character = { id, name, gender, species, origin, image ,status}
//     res.writeHead(200, {'Content-type': 'application/JSON'})
//     res.end(JSON.stringify(character))
// }
// const errorHandler =(error, res)=>{
//     res.writeHead(500, {"Content-type" : "text/plain"})
//     res.end('Sucedio el siguiente error: ' + error.message)
// }
// const getCharById=(res, id)=>{
//     axios(`${URL}/${id}`)
//     .then(response=>
//         // console.log(response)
//     successHandler(response, res), error=>errorHandler(error, res))

// }
