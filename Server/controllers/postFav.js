const {Favorite} = require('../src/DB_connection');

const postFav = async (req,res) =>{
    const {name, origin, status, image, species, gender} = req.body;
    try {
        if (!name || !origin || !status || !image || !species || !gender) {
            // Si falta algún dato, responde con status 401 y mensaje "Faltan datos"
            res.status(401).json("Faltan datos");
        }else{
            const [favCharacter, created] = await Favorite.findOrCreate({
                where: {name},
                defaults:  {origin, status, image, species, gender},
            });
            if(created){
                const allFavs = await Favorite.findAll()
                res.status(200).json(allFavs)
            }else{
                res.status(409).json({message: '¡Este personaje ya existe!'})
            }
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = postFav;