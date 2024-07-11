let estudiantes = {
    888: 60,
    777: 50,
    999: 40,
    333: 80,
    111: 30,
    555: 90,
    444: 48,
    222: 60
};
let aprobados = 0;
let reprobados = 0;
let sumaNotas = 0;
for (let cedula in estudiantes) {
    sumaNotas += estudiantes[cedula];
    if (estudiantes[cedula] >= 48) {
        aprobados++;
    } else {
        reprobados++;
    }
}
let notaPromedio = sumaNotas / Object.keys(estudiantes).length;

let salida = document.getElementById("salida");
salida.innerHTML = "Estadísticas de la Sección:";
salida.innerHTML += `<br>Cantidad de Aprobados: ${aprobados}`;
salida.innerHTML += `<br>Cantidad de Reprobados: ${reprobados}`;
salida.innerHTML += `<br>Nota Promedio de la Sección: ${notaPromedio}`;
