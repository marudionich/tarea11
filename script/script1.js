/* topping pueden ser "oreo", "kitkat","kinder"
precio oreo=10;
precio kitkat=15;
precio kinder=25; */ 


var helado= 40;
var preciofinal;

var topping="kinder";
var precio=25;
if(topping== "oreo"){
    console.log("el precio es 10")
}else if(topping=="kitkat"){
    console.log("el precio es 15")
}else if(topping=="kinder"){
    console.log("el precio es 25")
}else{
    console.log("no tenemos este topping")
}
var preciofinal= helado + precio;
alert("el helado cuesta $ " + preciofinal)


/* tenemos tres tipos de menú
carne con vino tinto
pescado con vino blanco
verdura con agua*/ 


/*var menú= prompt("ingrese su menú")

switch (menú) {
    case "carne":
        console.log("su pedido esta acompañado de vino tinto")
        break;
    case "pescado":
            console.log("su pedido esta acompañado de vino blanco")
        break;
    case "verdura":
            console.log("su pedido esta acompañado por agua ")
        break;    

    default:
        console.log("tiene que elegir una opcion entre carne, pescado o verdura")
        break;
}*/



/*var nombre=["maru","ruben","uma","clara"]

for (let index = 0; index < nombre.length; index++) {
    const element = nombre[index];
    console.log(nombre[index])
    
}
nombre.shift();
console.log(nombre);
nombre.unshift("juan");
console.log(nombre);
nombre.push("lolo","estrella");
console.log(nombre);*/


/*numero tiene que ser menor a 11*/


/*var numero = 0;

while (numero<11) {
    console.log("numero es mas chico que 11")
    numero= numero+1;
}*/
