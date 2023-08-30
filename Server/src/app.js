const express = require("express");
const server = express();
const cors = require('cors');
const PORT = 3001;
const router = require("../routes/index");

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

const corsOptions = {
  origin: 'http://localhost:3000', // Cambia a tu origen de cliente
  credentials: true,
  methods: 'GET, POST, OPTIONS, PUT, DELETE',
  allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
};

server.use(cors(corsOptions));


server.use(express.json());

server.use("/rickandmorty", router);
module.exports = server;
