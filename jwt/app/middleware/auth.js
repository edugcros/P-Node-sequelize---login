const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');

module.exports = (req, res, next) =>{

    console.log(req.headers)

    //Comprobamos que existe el token
    if(!req.headers.authorization){
        res.status(401).json({msg: 'Not authorized'});
    }
    else{
        let token = req.headers.authorization.split(' ')[1];

        //comprobamos la validez del token
        jwt.verify(token,authConfig.secret, (err, decoded) => {
            if(err){
                res.status(500).json({msg:'Token no valido', err });
            }else{
                req.users = decoded;
                next();
            }
        });
    } 
}