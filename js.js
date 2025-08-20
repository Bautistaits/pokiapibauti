// 1) Guardamos referencias a elementos del DOM por su id
let titulo = document.querySelector("#titulo")   // <h1 id="titulo">
let imagen = document.querySelector("#imagen")   // <img id="imagen">
let boton = document.querySelector("#boton")     // <button id="boton">
let pokeNum = 0
// 2) Cuando el usuario hace clic en el botón, se ejecuta esta función
boton.onclick = function () {

    // 3) fetch() hace una solicitud HTTP (GET por defecto) a la URL dada.
    // Devuelve una *Promesa* que se resuelve con un objeto Response
    // cuando el servidor contesta.
    pokeNum++
    fetch("https://pokeapi.co/api/v2/pokemon-form/157/")

    // 4) Primer .then()
    // Recibe el objeto Response (lo llamamos "respuesta").
    // Usamos el método .json() de ese objeto Response, lo convierte
    // en objeto JavaScript (desde JSON). OJO: .json() también devuelve
    // una Promesa, por eso encadenamos otro .then().
    .then(respuesta => respuesta.json())

    // 5) Segundo .then()
    // "datos" ya es el objeto JS con la información del Pokémon.
    .then(datos => {
        console.log(datos) // Mostramos todo el objeto en consola para revisar

        // 6) Actualizamos el DOM usando propiedades del objeto "datos"
        // datos.name: nombre del Pokémon
        // datos.sprites.front_shiny: URL de la imagen (sprite shiny)
        titulo.textContent = datos.name
        imagen.src = datos.sprites.front_shiny
    })
}