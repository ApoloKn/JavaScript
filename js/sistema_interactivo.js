function username(name) {
    
    if (name.trim() === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }
}

function Y_old(age) {
    
    age = parseInt(age);
    if (isNaN(age)) {
        console.error("Error: Ingrese una edad valida en numeros, por favor");
        alert("Error: Ingrese una edad valida en numeros, por favor")
        history.go(0);
    }
    else if (age < 0) {
        alert("Error: no puedes tener esta edad")
        history.go(0);
    }
    else if (age  < 18) {
        alert(`Hola ${name}, eres menor de edad. ¡Sigue aprendiendo y disfrutando!`);
    }
    else {
        alert(`Hola ${name}, eres mayor de edad. ¡Preparate para grandes oportunidades en el mundo de la programacion!`);
        window.location.href = "https://riwi.io/";
    }
}

console.log("¡Binevenido al sistema interactivo de mensajes!");



function login(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    // Obtén los valores de los campos
    let name = document.getElementById("name").value;
    username(name)
    let age = document.getElementById("age").value;
    Y_old(age)

    // Aquí puedes agregar lógica para validar los datos o enviarlos a un servidor
    console.log("Nombre ingresado:", name);
    console.log("Edad ingresada:", age);
}