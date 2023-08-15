const {Pool} = require('pg');

const conexion = new Pool({
    host: 'containers-us-west-108.railway.app',
    user: 'postgres',
    password: 'vXQX93lNwtVtjOhCWTbe',
    database: 'railway',
    port: 6960
});


function saludo(req,res){
    const {nombre} = req.params;
    res.status(200).json({"respuesta":`Buenas noches ${nombre}`})
}

// function edad(req,res){
//     const {Edad}= req.body
//     if(Edad > 50){
//         res.status(200).json("Ya eres viejo")
//         return
//     }else{
//         res.status(200).json("Eres joven")
//         return
//     }
//     res.status(200).json("No hay edad")
// }
async function empleados(req,res){
    let respuesta_base = await conexion.query("SELECT * FROM alumnos")
    res.status(200).json(respuesta_base.rows)
}

async function crearEmpleado(req,res){
    let {nombre,
        apellido,
        correo,
        comida_favorita,
        experencia} = req.body
    let respuesta_base = await conexion.query(`INSERT INTO 
    empleados(nombre,apellido,correo,comida_favorita)
    VALUES($1,$2,$3,$4)`,[nombre,apellido,correo,comida_favorita])
    res.status(200).json(respuesta_base)
}

module.exports = {
    saludo,
    edad,
    empleados,
    crearEmpleado,
}