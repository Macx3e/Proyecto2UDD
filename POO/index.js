// Clase para representar una pregunta
class Pregunta {
    constructor(texto, opciones) {
        this.texto = texto;
        this.opciones = opciones; // Array de opciones
        this.votos = new Array(opciones.length).fill(0); // Inicializamos votos en 0
    }

    votar(opcionIndex) {
        if (opcionIndex >= 0 && opcionIndex < this.opciones.length) {
            this.votos[opcionIndex]++;
        } else {
            alert("Opción inválida");
        }
    }

    mostrarResultados() {
        let resultados = `${this.texto}\n`;
        this.opciones.forEach((opcion, index) => {
            resultados += `${opcion}: ${this.votos[index]} votos\n`;
        });
        return resultados;
    }
}

// Clase para representar una encuesta
class Encuesta {
    constructor(titulo) {
        this.titulo = titulo;
        this.preguntas = [];
    }

    agregarPregunta(pregunta) {
        this.preguntas.push(pregunta);
    }

    votarEnPregunta(indicePregunta) {
        const pregunta = this.preguntas[indicePregunta];
        if (!pregunta) {
            alert("Pregunta no encontrada.");
            return;
        }

        let opcionesTexto = pregunta.opciones
            .map((opcion, index) => `${index + 1}. ${opcion}`)
            .join("\n");
        const respuesta = parseInt(
            prompt(`Pregunta: ${pregunta.texto}\n${opcionesTexto}\nIngresa el número de tu respuesta:`),
            10
        );

        pregunta.votar(respuesta - 1);
    }

    mostrarResultados() {
        let resultados = `Resultados de la encuesta: ${this.titulo}\n`;
        this.preguntas.forEach((pregunta) => {
            resultados += pregunta.mostrarResultados() + "\n";
        });
        alert(resultados);
    }
}

// Clase para gestionar el sistema de encuestas
class SistemaDeEncuestas {
    constructor() {
        this.encuestas = [];
    }

    crearEncuesta() {
        const titulo = prompt("Ingresa el título de la encuesta:");
        const nuevaEncuesta = new Encuesta(titulo);

        for (let i = 0; i < 8; i++) {
            const texto = prompt(`Ingresa el texto de la pregunta ${i + 1}:`);
            const opciones = prompt("Ingresa las opciones separadas por comas:").split(",");
            const nuevaPregunta = new Pregunta(texto, opciones);
            nuevaEncuesta.agregarPregunta(nuevaPregunta);
        }

        this.encuestas.push(nuevaEncuesta);
        alert(`Encuesta "${titulo}" creada exitosamente.`);
    }

    votar() {
        if (this.encuestas.length === 0) {
            alert("No hay encuestas disponibles.");
            return;
        }

        const titulosEncuestas = this.encuestas
            .map((encuesta, index) => `${index + 1}. ${encuesta.titulo}`)
            .join("\n");
        const indiceEncuesta = parseInt(
            prompt(`Selecciona una encuesta para votar:\n${titulosEncuestas}`),
            10
        );

        const encuestaSeleccionada = this.encuestas[indiceEncuesta - 1];
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
        );

        encuestaSeleccionada.votarEnPregunta(indicePregunta - 1);
    }

    mostrarResultados() {
        if (this.encuestas.length === 0) {
            alert("No hay encuestas disponibles.");
            return;
        }

        const titulosEncuestas = this.encuestas
            .map((encuesta, index) => `${index + 1}. ${encuesta.titulo}`)
            .join("\n");
        const indiceEncuesta = parseInt(
            prompt(`Selecciona una encuesta para ver los resultados:\n${titulosEncuestas}`),
            10
        );

        const encuestaSeleccionada = this.encuestas[indiceEncuesta - 1];
        if (!encuestaSeleccionada) {
            alert("Encuesta no encontrada.");
            return;
        }

        encuestaSeleccionada.mostrarResultados();
    }
}

//Iniciar sistema pero sin break/switch 

const sistema = new SistemaDeEncuestas();

let continuar = true; // Variable para controlar el bucle
do {
    const opcion = prompt(
        "Sistema de Encuestas\nSelecciona una opción:\n1. Crear una encuesta\n2. Votar en una encuesta\n3. Ver resultados de una encuesta\n4. Salir"
    );

    // Evaluamos si el usuario quiere salir
    if (opcion === "4") {
        alert("Saliendo del sistema...");
        continuar = false; // Cambiamos la variable para salir del bucle
    }

    // Condicionales dentro del ciclo, sin usar break
    if (opcion === "1") {
        sistema.crearEncuesta();
    } else if (opcion === "2") {
        sistema.votar();
    } else if (opcion === "3") {
        sistema.mostrarResultados();
    } else if (opcion !== "4") {
        alert("Opción inválida. Intenta nuevamente.");
    }

} while (continuar);
