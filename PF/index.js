//Index.js orientado a la PF (Programación Funcional), la idea de esto es implementar las mismas funcionalidades que en el POO
//pero usando funciones puras, enfoque distinto y estructura de datos mas sencilla y limpia

const encuestas = []; // Almacena las encuestas

// funcion para crear una encuesta
const crearEncuesta = () => {
    const titulo = prompt("¿Cuál es el título de la encuesta?");
    const preguntas = [];

    for (let i = 1; i <= 8; i++) {
        const textoPregunta = prompt(`Pregunta ${i}: ¿Cuál es el texto de la pregunta?`);
        const opciones = prompt(`Ingresa las opciones para la pregunta ${i}, separadas por comas:`).split(",");
        if (opciones.length < 2) {
            alert("Debes ingresar al menos 2 opciones. Inténtalo de nuevo.");
            i--;
            continue;
        }
        preguntas.push({ texto: textoPregunta, opciones, votos: new Array(opciones.length).fill(0) });
    }

    encuestas.push({ titulo, preguntas });
    alert(`¡La encuesta "${titulo}" fue creada con éxito!`);
};

// funcion para votar en una encuesta 
const votarEnEncuesta = () => {
    if (encuestas.length === 0) {
        alert("No hay encuestas disponibles para votar.");
        return;
    }

    const encuestasListado = encuestas.map((encuesta, index) => `${index + 1}. ${encuesta.titulo}`).join("\n");
    const encuestaIndex = parseInt(prompt(`Elige una encuesta para votar:\n${encuestasListado}`), 10) - 1;

    if (encuestaIndex < 0 || encuestaIndex >= encuestas.length) {
        alert("Selección inválida. Intenta de nuevo.");
        return;
    }

    const encuesta = encuestas[encuestaIndex];
    const preguntasListado = encuesta.preguntas.map((pregunta, index) => `${index + 1}. ${pregunta.texto}`).join("\n");
    const preguntaIndex = parseInt(prompt(`Elige una pregunta para votar:\n${preguntasListado}`), 10) - 1;

    if (preguntaIndex < 0 || preguntaIndex >= encuesta.preguntas.length) {
        alert("Selección inválida. Intenta de nuevo.");
        return;
    }

    const pregunta = encuesta.preguntas[preguntaIndex];
    const opcionesListado = pregunta.opciones.map((opcion, index) => `${index + 1}. ${opcion}`).join("\n");
    const opcionIndex = parseInt(prompt(`Elige una opción para votar:\n${opcionesListado}`), 10) - 1;

    if (opcionIndex < 0 || opcionIndex >= pregunta.opciones.length) {
        alert("Selección inválida. Intenta de nuevo.");
        return;
    }

    pregunta.votos[opcionIndex]++;
    alert("¡Voto registrado con éxito!");
};

// funcion de mostrar los resultados
const mostrarResultados = () => {
    if (encuestas.length === 0) {
        alert("No hay encuestas disponibles para mostrar resultados.");
        return;
    }

    const encuestasListado = encuestas.map((encuesta, index) => `${index + 1}. ${encuesta.titulo}`).join("\n");
    const encuestaIndex = parseInt(prompt(`Elige una encuesta para ver los resultados:\n${encuestasListado}`), 10) - 1;

    if (encuestaIndex < 0 || encuestaIndex >= encuestas.length) {
        alert("Selección inválida. Intenta de nuevo.");
        return;
    }
};

