const users = require('../utils/users')

const login =(req,res)=>{
    const {email, password} = req.query
    let access = false;

    //*👇🏻Verifica si dentro de ese arreglo hay un usuario que coincida tanto su email y su contraseña con los que recibes por Query.
    users.forEach(user=>{
        if(user.email === email && user.password=== password){
            access = true
        }
    })
    res.json({access})
}

module.exports = login;