//Mensaje de bienvenida en la consola
console.log("¡Binevenido al sistema interactivo de mensajes!");

//Solicitar datos de usuario
let nombre = prompt("Ingrese su nombre, por favor");
let edad = prompt("Ingrese su edad, por favor");

//Convertir edad a numero
edad = parseInt(edad);

//Condicionales
if (isNaN(edad)) {
    console.error("Error: Ingrese una edad valida en numeros, por favor");}
    //validar y mostrar mensaje a menores de edad
    else if (edad < 18) {
    alert(`Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando!`);}
    //validar y mostrar mensaje a mayores de edad
    else {
    alert(`Hola ${nombre}, eres mayor de edad. ¡Preparate para grandes oportunidades en el mundo de la programacion!`);}
