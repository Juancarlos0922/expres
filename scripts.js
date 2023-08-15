const nombre = document.getElementById("name")
const apellido = document.getElementById("last_name")
const correo = document.getElementById("email_input")
const comida = document.getElementById("eat")


function capturardato_name(){
    const prueba_name = nombre.value
    const prueba_lastname = apellido.value
    const prueba_email = correo.value
    const prueba_eat = comida.value
    console.log (prueba_name, prueba_lastname, prueba_email, prueba_eat)
}


const butonname = document.getElementById("enviar_nombre");
butonname.addEventListener("click",capturardato_name);



// function capturardato_lastname(){
    
//     console.log (prueba_lastname)
// }

// function capturardato_email(){
    
//     console.log (prueba_email)
// }

// function capturardato_eat(){
    
//     console.log (prueba_eat)
// }







// const butonname = document.getElementById("enviar_nombre");
// butonname.addEventListener("click",capturardato);

// const butonname = document.getElementById("enviar_nombre");
// butonname.addEventListener("click",capturardato);

// const butonname = document.getElementById("enviar_nombre");
// butonname.addEventListener("click",capturardato);