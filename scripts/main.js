/*const miTitulo = document.querySelector("h1");
miTitulo.textContent = "¡Hola mundo!";*/ //Muestra ¡Hola mundo! en el título

//Cambia de una imagen a otro al pulsarla
let miImage = document.querySelector("img");

miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "images/logo.jpg") {
    miImage.setAttribute("src", "images/imagen2.jpg");
  } else {
    miImage.setAttribute("src", "images/logo.jpg");
  }
};


//Pide el nombre del usuario y lo pone en el título de la página
let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");


//funcion que guarda el nombre de usuario
function estableceNombreUsuario() {
    let miNombre = prompt("Por favor, ingresa tu nombre.");
    
    //Con este if evitamos que el usuario introduzca el campo vacío o que al cancelar se muestre null
    if(!miNombre){
        estableceNombreUsuario();
    }else{
        localStorage.setItem("nombre", miNombre);
        miTitulo.textContent = "Bienvenid@," + miNombre;
    }
}


//Comprueba si el nombre ya se ha guardado antes o no
if (!localStorage.getItem("nombre")) {
    estableceNombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = "Bienvenid@," + nombreAlmacenado;
}

//llamada a la funcion estableceNombreUsuario
miBoton.onclick = function () {
    estableceNombreUsuario();
};