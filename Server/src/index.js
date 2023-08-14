const http = require("http")
const data = require('../utils/data')
const PORT = 3001

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); //? => Establecer el encabezado Access-Control-Allow-Origin para permitir solicitudes CORS desde cualquier origen
    // *************************************//
    const { url } = req //*Extrae la propiedad url del objeto de solicitud (req) utilizando destructuración de objetos.
    /*------------------------------------- */
    if (url.includes("/rickandmorty/character")) {
      //*En caso de que la URL incluya el string, obtengo el id de character
      const id = Number(url.split("/").pop())
      const character = data.find((char) => char.id == id)
      if (character) {
        res.writeHead(200, { "Content-type": "application/json" })
        res.end(JSON.stringify(character))
      } else {
        res.writeHead(404, { "Content-type": "text/plain" })
        res.end(`La direccion: ${url} - NO existe`)
      }
    }
  })
  .listen(PORT, "localhost"); //👉🏻Creo y levanto un servidor en el puerto 3001
