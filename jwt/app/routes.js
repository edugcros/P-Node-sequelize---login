const express = require('express');
const router = express.Router();

//Middleware 
const auth = require('./middleware/auth');

// Controllers
const AuthController = require('./controllers/AuthController')
const PostController = require('./controllers/PostController')

// Create Routes api/signin and api/signup

router.post('/api/signin', AuthController.signIn);
router.post('/api/signup', AuthController.signUp);

//Rutas Posts

router.get('/api/posts',auth, PostController.index);

module.exports = router;