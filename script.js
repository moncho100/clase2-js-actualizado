//Ejemplo 1

let numero = parseInt(prompt("Ingrese un numero"));
if( numero >= 10){
    console.log("Tu numero es mayor o igual a 10");
}else{
    console.log("Tu numero es menor a 10");
}

//Ejemplo 2

let numeroDeMessi = prompt("Que numero usa Messi en el psg?")
if(numeroDeMessi == 30){
    console.log("Tu respuesta es CORRECTA")
}else if(numeroDeMessi != 30){
    console.log("Tu respuesta es INCORRECTA, Messi usa la 30")
}

//Ejemplo 3

// Let golesMinimoDeRonaldo = 
// let numeroDeRonaldo = parseInt(prompt("Cuantos goles tiene en total Cristiano Ronaldo?"))
// let golesDeRonaldo = 815
// if((golesDeRonaldo == 815) && (numeroDeRonaldo <= 850 && golesMinimoDeRonaldo)){
//     console.log("Tu respuesta es correcta")
// }else if((golesDeRonaldo == 815) && (numeroDeRonaldo >= 850)){
//     console.log("Tu respuesta es INCORRECTA, Ronaldo tiene 815 goles")
// }else{
//     console.log("Tu numero se a quedado corto, la respuesta es 815")
// }

//Ejemplo 4

let escribeUnNumero = parseInt(prompt("Escribe un numero entre el 4 y 8"))
    if((escribeUnNumero >= 4) && (escribeUnNumero <= 8)){
        console.log("Correcto");
    }else if((escribeUnNumero <= 4)){
        console.log("Incorrecto te quedaste corto")
    }else if((escribeUnNumero >= 8)){
        console.log("Incorrect, te pasaste");
    }
