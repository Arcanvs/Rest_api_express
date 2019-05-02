express         = module.exports = require('express');
bodyParser      = module.exports = require('body-parser');

let userRoutes = require('./routes/user.route');
connection      = require('./config/database') // configuración de la BD

var port = process.env.PORT || 8080; // Puerto Utilizado

var app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

// Rutas user
app.use('/user',userRoutes);

// Servicio Corriendo
app.listen(port, function () {
    console.log(`Servidor Api-InsucoTalca corriendo en el puerto : ${port}`);
})

module.exports = app;