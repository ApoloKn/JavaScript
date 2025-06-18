function username(name) {
    if (name.trim() === "") {
        // Manejar caso de entrada vacía
        console.error("Error: Ingrese un nombre, por favor");
        alert("Error: Ingrese un nombre, por favor")
        history.go(0);
    }
}

function Y_old() {
    let edad = prompt("Ingrese su edad, por favor");
    //Convertir edad de cadena a entero
    edad = parseInt(edad);
    if (isNaN(edad)) {
        console.error("Error: Ingrese una edad valida en numeros, por favor");
        alert("Error: Ingrese una edad valida en numeros, por favor")
        history.go(0);
    }
    //validar y mostrar mensaje a menores de edad
    else if (edad < 18) {
        alert(`Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando!`);
    }
    //validar y mostrar mensaje a mayores de edad
    else {
        alert(`Hola ${nombre}, eres mayor de edad. ¡Preparate para grandes oportunidades en el mundo de la programacion!`);
    }
}


//Mensaje de bienvenida en la consola
console.log("¡Binevenido al sistema interactivo de mensajes!");

//Solicitar datos de usuario
let nombre = prompt("Ingrese su nombre, por favor");
username(nombre)

let edad = Y_old()
