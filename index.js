const express= require('express');
const app= express();
const rutas = require("./routes/routes")

app.use(express.json());
app.use(express.urlencoded({extended:false})); // esta linea dice que el usuario no va a enviar datos de tipo compuesto.
app.use(rutas)
app.listen(3000); // que puerto del servidor va a esperar o escuchar las peticiones