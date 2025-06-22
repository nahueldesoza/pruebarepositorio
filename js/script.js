
function ingreseNombre (){
    let nombre = prompt ("Ingrese su nombre");
    return (nombre);
}
function ingreseEdad (){
    let edad = prompt ("Ingrese su nombre");
    return (edad);
}
function mostrar (nombre,edad){
    if (edad>=18){
        alert("Hola "+nombre+", tenés "+edad+" años. Sos mayor.");
    } else {
        console.log("Hola "+nombre+", tenés "+edad+" años. Sos menor.");
    }
}
let nombre = ingreseNombre ();
let edad = ingreseEdad ();
mostrar (nombre,edad);
const arrarVacio=[]
let a1 = prompt("Ingrese los nombres para el array:")
while (a1 != 0){
    arrarVacio.push(a1)
    a1 = prompt("Ingrese los nombres para el array:")
}
alert (arrarVacio)