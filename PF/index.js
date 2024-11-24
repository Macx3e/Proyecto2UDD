//Index.js orientado a la PF (Programación Funcional), la idea de esto es implementar las mismas funcionalidades que en el POO
//pero usando funciones puras, enfoque distinto y estructura de datos mas sencilla y limpia

// Función para crear una pregunta que posteriormente podamos votar y que se almacene en los datos 
function crearPregunta(texto, opciones) {
    return {
        texto: texto,
        opciones: opciones, // Array de opciones
        votos: new Array(opciones.length).fill(0), // Inicializamos votos en 0
    };
}

// Función para votar en una pregunta que hayamos hecho
function votarPregunta(pregunta, opcionIndex) {
    if (opcionIndex >= 0 && opcionIndex < pregunta.opciones.length) {
        pregunta.votos[opcionIndex]++;
    } else {
        alert("Opción inválida");
    }
}

// Función para mostrar los resultados de la pregunta que hayamos realizado
function mostrarResultadosPregunta(pregunta) {
    let resultados = `${pregunta.texto}\n`;
    pregunta.opciones.forEach((opcion, index) => {
        resultados += `${opcion}: ${pregunta.votos[index]} votos\n`;
    });
    return resultados;
}
// funcion de crear la encuesta
function crearEncuesta(titulo, preguntas) {
    return {
        titulo: titulo,
        preguntas: preguntas,
    };
}

// funcion de votar 
function votarEncuesta(encuesta, indicePregunta, opcionIndex) {
    const pregunta = encuesta.preguntas[indicePregunta];
    if (!pregunta) {
        alert("Pregunta no encontrada.");
        return;
    }
    votarPregunta(pregunta, opcionIndex);
}

// funcion de mostrar resultados
function mostrarResultadosEncuesta(encuesta) {
    let resultados = `Resultados de la encuesta: ${encuesta.titulo}\n`;
    encuesta.preguntas.forEach((pregunta) => {
        resultados += mostrarResultadosPregunta(pregunta) + "\n";
    });
    alert(resultados);
}

// Función para crear una encuesta interactiva
function crearEncuestaInteractiva() {
    const titulo = prompt("Ingresa el título de la encuesta:");
    const preguntas = [];
    
    for (let i = 0; i < 8; i++) {
        const texto = prompt(`Ingresa el texto de la pregunta ${i + 1}:`);
        const opciones = prompt("Ingresa las opciones separadas por comas:").split(",");
        preguntas.push(crearPregunta(texto, opciones));
    }

    return crearEncuesta(titulo, preguntas);
}

// funcion para votar en una encuesta que se pueda participar 
function votarEncuestaInteractiva(encuestas) {
    if (encuestas.length === 0) {
        alert("No hay encuestas disponibles.");
        return;
    }

    const titulosEncuestas = encuestas
        .map((encuesta, index) => `${index + 1}. ${encuesta.titulo}`)
        .join("\n");
    const indiceEncuesta = parseInt(
        prompt(`Selecciona una encuesta para votar:\n${titulosEncuestas}`),
        10
    );

    const encuestaSeleccionada = encuestas[indiceEncuesta - 1];
    if (!encuestaSeleccionada) {
        alert("Encuesta no encontrada.");
        return;
    }

    const preguntasTexto = encuestaSeleccionada.preguntas
        .map((pregunta, index) => `${index + 1}. ${pregunta.texto}`)
        .join("\n");
    const indicePregunta = parseInt(
        prompt(`Selecciona una pregunta para votar:\n${preguntasTexto}`),
        10
    );}

    const opcionesTexto = encuestaSeleccionada.preguntas[indicePregunta - 1].opciones
    .map((opcion, index) => `${index + 1}. ${opcion}`)
    .join("\n");
const opcionVotada = parseInt(
    prompt(`Ingresa el número de tu respuesta:\n${opcionesTexto}`),
    10
);

votarEncuesta(encuestaSeleccionada, indicePregunta - 1, opcionVotada - 1);


// Funcion para mostrar los resultados interactivos
function mostrarResultadosInteractivos(encuestas) {
if (encuestas.length === 0) {
    alert("No hay encuestas disponibles.");
    return;
}

const titulosEncuestas = encuestas
    .map((encuesta, index) => `${index + 1}. ${encuesta.titulo}`)
    .join("\n");
const indiceEncuesta = parseInt(
    prompt(`Selecciona una encuesta para ver los resultados:\n${titulosEncuestas}`),
    10
);

const encuestaSeleccionada = encuestas[indiceEncuesta - 1];
if (!encuestaSeleccionada) {
    alert("Encuesta no encontrada.");
    return;
}
}
