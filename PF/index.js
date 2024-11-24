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


