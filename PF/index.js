class Pregunta {
constructor(texto, opciones) {

this.texto = texto;
this.opciones = opciones; //Array de opciones de la pregunta ("Si", "No", "No lo sé","Tal, vez") para el usuario
this.votos = new array (opciones.length).fill(0); //Array de números que representan la cantidad de votos de cada opcion
} }

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
