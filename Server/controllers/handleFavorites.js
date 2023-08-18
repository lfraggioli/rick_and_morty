const myFavorites = []

const postFav =(req,res)=>{
    //👇🏻Agrega en tu arreglo de favoritos el personaje que estarás recibiendo por Body
    //!No es recomendable pasar req.body sin destructuring, INVESTIGAR
    // let {id} = req.body

    // const findRepeat = myFavorites.find(char => char.id === id)
    // if(findRepeat){
    //     return res.status(400).json({error: 'Personaje repetido'})
    // }
    myFavorites.push(req.body)
    res.json(myFavorites)
}

const deleteFav =(req,res)=>{
    const {id} = req.params
    const filtered = myFavorites.filter(fav=>fav.id !== Number(id))
    myFavorites = filtered
    res.json(myFavorites)
}

module.exports = {
    postFav, deleteFav
}