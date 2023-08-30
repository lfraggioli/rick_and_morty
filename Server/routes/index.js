const router = require("express").Router();
//!Controllers
const login = require("../controllers/login");
const getCharById = require("../controllers/getCharById");
const deleteFav = require("../controllers/deleteFav");
const postFav = require("../controllers/postFav");
const postUser = require("../controllers/postUser");

router.get("/character/:id", getCharById); //!NO se modifica
router.get("/login", login);
router.post("/login", postUser);
router.post("/fav", postFav);
router.delete("fav/:id", deleteFav);

module.exports = router;
