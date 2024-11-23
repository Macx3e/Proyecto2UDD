class Pregunta {      //Primera clase referente a la estructura de la pregunta (texto, opciones, votos)
constructor(texto, opciones) {
    
 this.texto = texto;
 this.opciones = opciones; //Array de opciones de la pregunta ("Si", "No", "No lo sé","Tal, vez") para el usuario
 this.votos = new array (opciones.length).fill(0); //Array de números que representan la cantidad de votos de cada opcion
}}
    
registrarvoto(opcion); {
    const indice = this.opciones.indexOf(opcion);
    if (indice !== -1) {
         this.votos[indice]++;
        } else {
        console.log("Opción no válida");
    }
}
    
calcularResultado(); {
return this.opciones.map((opcion, index) => ({opcion,votos: this.votos[index],}))}


class Encuesta { //Segunda clase referente a la estructura de la encuesta (titulo, preguntas)
    constructor(titulo) {
        this.titulo = titulo;
        this.preguntas = []; 
    }
}

crearPregunta(pregunta); {
    this.preguntas.push(pregunta);
}


votar(preguntaIndex, opcion); {
    if (this.preguntas[preguntaIndex]) {
   this.preguntas[preguntaIndex].registrarvoto(opcion);
    } else {
        console.log("Pregunta no válida");
    }
}

mostrarResultados(); {
    console.log("Resultados de la encuesta: ${this.titulo}");
    this.preguntas.forEach((pregunta, index) => {console.log(`Pregunta ${index + 1}: ${pregunta.texto}`)});
    pregunta.obtenerResultados().forEach((resultado, index) => {console.log(`Opción ${index + 1}: ${resultado.opcion} - ${resultado.votos} votos`)});
}



 
class Sistemadeencuestas { //Tercera clase referente a la estructura de la aplicación (encuestas, preguntas, votos)
    constructor() {
        this.encuestas = [];
    }
    crearEncuesta(titulo) {
     const nuevaEncuesta = new Encuesta(titulo);
     this.encuestas.push(nuevaEncuesta);
     return nuevaEncuesta;
    }

    listarEncuestas() {
        this.encuestas.forEach((encuesta, index) => {console.log(`Encuesta ${index + 1}: ${encuesta.titulo}`)});
    }}

    votar(encuestaIndex, preguntaIndex, opcion); {
        if (this.encuestas[encuestaIndex]) {
            this.encuestas[encuestaIndex].votar(preguntaIndex, opcion);
        } else {
            console.log("Encuesta no válida");
    }
}

