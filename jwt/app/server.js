const express = require('express');
const app = express();
const {sequelize} = require('./models/index')

//Settings
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// Home
app.get('/', (req, res) => res.json({hello:'World!'}));

//Routes
app.use(require('./routes'));

app.listen(PORT, () => {
  console.log(`Coneccion al puerto http://localhost:${PORT}!`);

  sequelize.authenticate().then(() =>{
    console.log('Nos hemos conectado a la base de datos!!');
  })
})