const {Favorite} = require('../src/DB_connection')

const deleteFav = async (req,res) =>{
    const {id} = req.body;
    try {
        const exFav = await Favorite.destroy({where: {id}});
        if(exFav > 0){
            const listaFavs = await Favorite.findAll();

            res.status(200).json(listaFavs);
        }else{
            res.status(401).json({message: 'No se ha encontrado el id proporcionado...'})
        }
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

module.exports=deleteFav;