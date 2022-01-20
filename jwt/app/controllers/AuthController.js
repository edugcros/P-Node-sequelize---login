const {users} = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');

module.exports = {

//Signing 
signIn(req, res){

	let {email, password} = req.body;

		//Buscamos el usuario para
	users.findOne({
		where: {
			email: email
		}
		}).then(users => {

			if(!users){
				res.status(404).json({msg: "Usuario no eoncontrado"})
			}else{
				if(bcrypt.compareSync(password, users.password)){

				// Creamos el token
				let token = jwt.sign({users: users}, authConfig.secret,{
					xpiresIn: authConfig.expires
				});

				res.json({
					users: users,
					token: token,
				})
				}else{
					res.status(404).json({msg: "Contraseña Incorrecta"})
				}
			}
		}).catch(err => {
			res.status(500).json(err);
		})

},

//Registro

signUp(req, res){

		if (password.length < 6){
			res.status(404).json({msg:"Password incorrecta"});
		}
			if(users != 'string'){
			res.status(404).json({msg: "El name solo puede contener letas"})
			}

		else{	
			// Encriptamos la contraseña
			password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));}

		// Creamos el usuario
		users.create({
			userName: req.body.userName,
			email: req.body.email,
			password: password
		}).then(users => {

		// Creamos el token
			let token = jwt.sign({users: users}, authConfig.secret,{
					expiresIn: authConfig.expires
			});

			res.json({
					users: users,
					token: token
			});

		}).catch(err => {
				res.status(500).json(err);
		})
}

}