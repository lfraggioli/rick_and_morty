const axios = require('axios')
// const URL = 'https://rickandmortyapi.com/api/character'
require('dotenv').config()
const {URL} = process.env

const successHandler = (response, res)=>{
    const { id, name, gender, species, origin, image ,status} = response.data
    const character = { id, name, gender, species, origin, image ,status}
    res.writeHead(200, {'Content-type': 'application/JSON'})
    res.end(JSON.stringify(character))
}
const errorHandler =(error, res)=>{
    res.writeHead(500, {"Content-type" : "text/plain"})
    res.end('Sucedio el siguiente error: ' + error.message)
}
const getCharById=(res, id)=>{
    axios(`${URL}/${id}`)
    .then(response=>
        // console.log(response)
    successHandler(response, res), error=>errorHandler(error, res))
   
}


module.exports = getCharById;