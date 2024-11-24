//Index.js orientado a la PF (Programación Funcional), la idea de esto es implementar las mismas funcionalidades que en el POO
//pero usando funciones puras, enfoque distinto y estructura de datos mas sencilla y limpia

// Función para crear una pregunta que posteriormente podamos votar y que se almacene
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