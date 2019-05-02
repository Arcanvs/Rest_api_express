var routes = express.Router();
var userController = require('./../controller/user.controller');

// Creando las Rutas
routes.get('/all_users', userController.allUsers);

module.exports = routes;