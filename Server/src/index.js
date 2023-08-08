const http = require("http");
const data = require("./utils/data");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    const { url } = req;
    if (url.includes("/rickandmorty/character")) {
      //*En caso de que la URL incluya el string, obtengo el id de character
      const id = url.split("/").at(-1);
        let character = data.find(char => char.id == id)
        if(character?.name){
            res.writeHead(200, {"Content-type": "application/json"})
            res.end(JSON.stringify(character))

        }else{
            res.writeHead(404, {"Content-type": "text/plain"})
            res.end("NOT FOUND: no se encontro un personaje con ese id")
        }   

    }
  })
  .listen(3001, "localhost"); //👉🏻Creo y levanto un servidor en el puerto 3001
