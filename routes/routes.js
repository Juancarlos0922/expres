const {Router} = require('express');
const {saludo,edad,empleados,crearEmpleado} = require('../controllers/controllers');
const router = Router();

// req = request, res = response
router.get('/hola/:nombre', saludo)

// router.get('/adios', function(req,res){
//     res.status(200).json({"respuesta":"adios"})
// })
// router.get('/dias', function(req,res){
//     res.status(200).json({"respuesta":"Buenos Dias"})
// })

router.post('/regresaDatos', edad)
router.get('/empleados',empleados)
router.post('/crear-empleado',crearEmpleado)

module.exports = router;