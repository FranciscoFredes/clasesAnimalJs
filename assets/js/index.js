import { Leon, Lobo, Oso, Serpiente, Aguila } from "./classes/Tipos.js";// Importa las clases de animales desde el archivo Tipos.js
import animalesData from "./Animales.js"; // Importa el módulo de datos de animales desde el archivo Animales.js

let animalRegistrado = []

//Función para recargar la tabla de animales en la interfaz de usuario
const reloadTable = () => {
  const animalesTemplate = document.getElementById("Animales"); // Obtiene el contenedor de la tabla de animales
  animalesTemplate.innerHTML = ""; // Limpia el contenido actual de la tabla
  animalRegistrado.forEach((p, i) => {
      // Itera sobre cada animal en el arreglo y agrega su contenido al template
      animalesTemplate.innerHTML += `<div class="px-3 pb-2"> 
          <div class="bg-dark text-white">
              <img
                  height="200"
                  src="${p.getImg()}"
                  data-toggle="modal" data-target="#exampleModal"
                  onclick="modalDetails('${i}')"
              />
              <div>
                  <button onclick="playSound('${p.getNombre()}')" class="btn btn-secondary">Play Sound</button>
              </div>
          </div> 
      </div>`;
  });
  document
      .querySelectorAll(".card-body button")
      .forEach((b) => b.addEventListener("click", activarHabiblidad)); // Agrega un evento de clic a los botones para activar habilidades
};
// Función para reproducir el sonido del animal seleccionado
window.playSound = (nombre) => {
  const animal = animalRegistrado.find((a) => a.getNombre() == nombre); // Encuentra el objeto de animal correspondiente al nombre
  console.log(sonido); // Imprime el objeto animal en la consola
  // Selecciona el método de sonido según el tipo de animal y lo reproduce
    nombre == "Leon"
    ? animal.Rugir()
    : nombre == "Lobo"
    ? animal.Aullar()
    : nombre == "Oso"
    ? animal.Grunir()
    : nombre == "Serpiente"
    ? animal.Sisear()
    : nombre == "Aguila"
    ? animal.Chillar()
    :undefined;
};

// Función para mostrar los detalles de un animal en el modal
window.modalDetails = (i) => {
  const modalBody = document.getElementsByClassName("modal-body")[0]; // Obtiene el cuerpo del modal
  const animal = animalRegistrado[i]; // Obtiene el objeto de animal correspondiente al índice
  modalBody.innerHTML = `
  <div class="px-3 pb-2">
  <div class="card w-50 m-auto bg-dark text-white border-0">
  <img src="${animal.getImg()}" class="d-block m-auto w-100"/>
  <div class="card-body text-center">
    <h6 class="card-text">${animal.getNombre()}</h6>
    <h6 class="card-text">${animal.getEdad()}</h6>
    <h6 class="card-text m-0">Comentarios</h6>
    <hr/>
    <p>${animal.getComentarios()}</p>
  </div>
  </div>    
    `; // Agrega el HTML correspondiente al cuerpo del modal para mostrar los detalles del animal
};

// Variable para almacenar la ruta de la imagen del animal seleccionado
let imagenSrc;
// Variable para almacenar el sonido del animal seleccionado
let sonido;

// Evento de cambio en la selección del tipo de animal
document.getElementById("animal").addEventListener("change", async (e) => {
  const animalSelected = e.target.value; // Obtiene el valor seleccionado en el elemento de selección
  const animales = await animalesData.getData(); // Obtiene los datos de animales del módulo animalesData
  const animalObject = animales.find((a) => a.name == animalSelected); // Encuentra el objeto de animal correspondiente al nombre seleccionado
  // Variable para almacenar la ruta de la imagen del animal seleccionado
  imagenSrc = `/assets/imgs/${animalObject.imagen}`;
// Variable para almacenar el sonido del animal seleccionado
  sonido = `/assets/sounds/${animalObject.sonido}`;
  const preview = document.getElementById("preview"); // Obtiene el elemento de vista previa de imagen
  preview.parentElement.classList.remove("p-5"); // Remueve una clase de estilo del contenedor de la vista previa
  preview.style.backgroundImage = `url(${imagenSrc})`; // Establece la imagen de fondo de la vista previa


});

// Evento de clic en el botón de registro de animal
document.getElementById("btnRegistrar").addEventListener("click", async (e) =>{
  // Escuchando los input dentro del formulario
  const nombreElement = document.getElementById("animal");
  const edadElement = document.getElementById("edad");
  const comentariosElement = document.getElementById("comentarios");
  // Almacenando la informacion ingresada en el formulario
  const nombre = nombreElement.value;
  const edad = edadElement.value;
  const comentarios = comentariosElement.value;
  //Validando formulario e instanciando la clase animal segun su seleccion
  if (nombre && edad && comentarios){
    let animal =
      nombre == "Leon"
      ? new Leon(nombre, edad, imagenSrc, comentarios, sonido)
      :nombre == "Lobo"
      ? new Lobo(nombre, edad, imagenSrc, comentarios, sonido)
      :nombre == "Oso"
      ? new Oso(nombre, edad, imagenSrc, comentarios, sonido)
      :nombre == "Serpiente"
      ? new Serpiente(nombre, edad, imagenSrc, comentarios, sonido)
      :nombre == "Aguila"
      ? new Aguila(nombre, edad, imagenSrc, comentarios, sonido)
      :undefined;

      nombreElement.selectedIndex = 0;
      edadElement.selectedIndex = 0;
      document.getElementById("preview").style.backgroundImage = `url(assets/imgs/lion.svg)`;
      //Metodo para agregar los datos de animal a la tabla
      animalRegistrado.push(animal);
      console.log(animal)
      reloadTable();
  }
  //Alerta en caso de no completar el formulario
  else{
    alert("Debe llenar todos los datos del formulario")
  }
})


