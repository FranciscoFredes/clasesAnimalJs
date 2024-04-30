import Animal from "./Animal.js"; // Importa la clase Animal desde el archivo Animal.js

const audioPlayer = document.getElementById("player"); // Obtiene el elemento de audio del documento HTML

// Clase para representar un León, que extiende la clase Animal.
class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido); // Llama al constructor de la clase Animal con super().
  }

  Rugir() {
    console.log(this.getSonido()); // Imprime el sonido en la consola.
    audioPlayer.src = this.getSonido(); // Establece la ruta del archivo de sonido.
    audioPlayer.play(); // Reproduce el sonido
  }
}
class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
      super(nombre, edad, img, comentarios, sonido); // Llama al constructor de la clase Animal con super().
    }
  
    Aullar() {
      console.log(this.getSonido()); // Imprime el sonido en la consola.
      audioPlayer.src = this.getSonido(); // Establece la ruta del archivo de sonido.
      audioPlayer.play(); // Reproduce el sonido.
    }
  }
  class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
      super(nombre, edad, img, comentarios, sonido); // Llama al constructor de la clase Animal con super().
    }
  
    Grunir() {
      console.log(this.getSonido()); // Imprime el sonido en la consola.
      audioPlayer.play(); // Reproduce el sonido.
      audioPlayer.src = this.getSonido(); // Establece la ruta del archivo de sonido.
    }
  }
  class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
      super(nombre, edad, img, comentarios, sonido); // Llama al constructor de la clase Animal con super().
    }
  
    Sisear() {
      console.log(this.getSonido()); // Imprime el sonido en la consola.
      audioPlayer.src = this.getSonido(); // Establece la ruta del archivo de sonido.
      audioPlayer.play(); // Reproduce el sonido del león.
    }
  }
  class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
      super(nombre, edad, img, comentarios, sonido); // Llama al constructor de la clase Animal con super().
    }
  
    Chillar() {
      console.log(this.getSonido()); // Imprime el sonido del león en la consola.
      audioPlayer.src = this.getSonido(); // Establece la ruta del archivo de sonido.
      audioPlayer.play(); // Reproduce el sonido.
    }
  }
  export {Leon, Lobo, Oso, Serpiente, Aguila};