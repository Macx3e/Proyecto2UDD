class Pregunta {
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


class Encuesta {
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



 
    