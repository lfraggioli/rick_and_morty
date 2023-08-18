const express = require('express')
const server = require('./app')
const PORT = 3001
const router = require('../routes/index')

//!Instalar Morgan
//instalar cors

//!MIDDLEWARE
// server.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header(
//      'Access-Control-Allow-Headers',
//      'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   res.header(
//      'Access-Control-Allow-Methods',
//      'GET, POST, OPTIONS, PUT, DELETE'
//   );
//   next();
// });

// server.use(express.json())
// server.use('/rickandmorty', router)


server.listen(PORT, ()=>{
  console.log(`Servidor en puerto ${PORT}`)
})











// ! HTTP
//const http = require("http")
// const PORT = 3001
// const getCharById = require('../controllers/getChardById')

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*") //? => Establecer el encabezado Access-Control-Allow-Origin para permitir solicitudes CORS desde cualquier origen
//      / *************************************//
//     const { url } = req //*Extrae la propiedad url del objeto de solicitud (req) utilizando destructuración de objetos.
//     /*------------------------------------- */
    
//     if(url.includes('/rickandmorty/character')){ //*✅Crea un condicional que pregunte si la url incluye el string
//       const id = Number(url.split('/').pop())
//       getCharById(res, id)
//     }else{
//       res.writeHead(404, {"Content-type":"application/JSON"})
//       res.end(JSON.stringify({error: "Character not found"}))
//     }
//     })
//   .listen(PORT, ()=>{
//     console.log(`servidor corriendo en el puerto ${PORT}`)
//   }) //👉🏻Creo y levanto un servidor en el puerto 3001

  
  //!HW de web server 👇🏻
  // if (url.includes("/rickandmorty/character")) {
  //   En caso de que la URL incluya el string, obtengo el id de character
  //   const id = Number(url.split("/").pop())
  //   const character = data.find((char) => char.id == id)
  //   if (character) {
  //     res.writeHead(200, { "Content-type": "application/json" })
  //     res.end(JSON.stringify(character))
  //   } else {
  //     res.writeHead(404, { "Content-type": "text/plain" })
  //     res.end(`La direccion: ${url} - NO existe`)
  //   }
  // }