let number = 4;
const a = prompt ("Ingrese su nombre");
let boolean = false;
console.log(number,a,boolean);
const edad = prompt ("Cuantos años tenés?")
function mostrar (a,edad){
    if (edad>=18){
        console.log("Hola "+a+", tenés "+edad+" años. Sos mayor.");
    } else {
        console.log("Hola "+a+", tenés "+edad+" años. Sos menor.");
    }
    
}
mostrar (a,edad)
