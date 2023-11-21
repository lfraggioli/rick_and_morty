const express = require("express");
const server = express();
const cors = require("cors");
const PORT = 3001;
const router = require("../routes/index");
const mongoose = require("mongoose");
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
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://lucasfraggioli:CxtGF0y1CDGp3yH2@cluster0.zrxrol1.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const corsOptions = {
  origin: "https://rick-and-morty-r1va.vercel.app", // Cambia a tu origen de cliente
  credentials: true,
  methods: "GET, POST, OPTIONS, PUT, DELETE",
  allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept",
};

server.use(cors(corsOptions));

server.use(express.json());

server.use("/rickandmorty", router);
module.exports = server;
