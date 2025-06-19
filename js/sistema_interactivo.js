// Función que valida que el campo de nombre no esté vacío
function username(name) {
    // Elimina espacios en blanco al inicio y al final del nombre
    if (name.trim() === "") {
        alert("Por favor, completa todos los campos."); // Alerta si el campo está vacío
        return; // Detiene la ejecución si el campo está vacío
    }
}

// Función que valida la edad e imprime un mensaje personalizado
function Y_old(name, age) {    
    age = parseInt(age); // Convierte la edad a número entero

    if (isNaN(age)) {
        // Si no es un número, muestra un error
        console.error("Error: Ingrese una edad valida en numeros, por favor");
        alert("Error: Ingrese una edad valida en numeros, por favor");
        history.go(0); // Recarga la página
    }
    else if (age < 0) {
        // Si la edad es menor que 0, muestra otra alerta
        alert("Error: no puedes tener esta edad");
        history.go(0); // Recarga la página
    }
    else if (age < 18) {
        // Si es menor de edad, muestra mensaje motivador
        alert(`Hola ${name}, eres menor de edad. ¡Sigue aprendiendo y disfrutando!`);
    }
    else {
        // Si es mayor de edad, muestra mensaje y redirige a una web
        alert(`Hola ${name}, eres mayor de edad. ¡Preparate para grandes oportunidades en el mundo de la programación!`);
        window.location.href = "https://riwi.io/"; // Redirección
    }
}

// Mensaje de bienvenida en consola
console.log("¡Binevenido al sistema interactivo de mensajes!");


// Función principal que se llama al enviar el formulario
function login(event) {
    event.preventDefault(); // Previene que el formulario se recargue

    // Obtiene el valor del campo de nombre
    let name = document.getElementById("name").value;
    username(name); // Valida que el nombre no esté vacío

    // Obtiene el valor del campo de edad
    let age = document.getElementById("age").value;
    Y_old(name, age); // Valida la edad y responde según el valor

    // Muestra en consola los datos ingresados
    console.log("Nombre ingresado:", name);
    console.log("Edad ingresada:", age);
}
