var any = "1990";

console.log((1990).toString() === any); //.toStrign() converteix números en strings

//------------------------------------------------------------------------------------------

var num = "12.765"

floatNum = parseFloat(num); // Converteix la string en un número decimal

console.log(floatNum);

intNum = parseInt(num);  // Converteix la string en un número sencer

console.log(intNum);

roundNum = floatNum.toFixed(0);  // Arrodoneix el número decimal

console.log(roundNum);

//------------------------------------------------------------------------------------------

var bigNum = 653164978258846;

console.log(bigNum.toExponential(6));

var smallNum = 0.00265863255;

console.log(smallNum.toExponential(3));

//------------------------------------------------------------------------------------------

console.log(new Date().getTime());  // retorna els milisegons quan han passat des del 1/1/1970