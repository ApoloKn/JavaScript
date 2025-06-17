console.log("¡Binevenido al sistema interactivo de mensajes!");

//solicitar datos de usuario
let nombre = prompt("Ingrese su nombre, por favor");
let edad = prompt("Ingrese su edad, por favor");

//convertir edad a numero
edad = parseInt(edad);

//validar y mostrar mensajes
if (isNaN(edad)) {
    console.error("Error: Ingrese una edad valida en numeros, por favor");
} else if (edad < 18) {
    alert(`Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando!`);
} else {
    alert(`Hola ${nombre}, eres mayor de edad. ¡Preparate para grandes oportunidades en el mundo de la programacion!`);
}