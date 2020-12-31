console.log("JavaScript carregat des d'un document .js dins el <body>");

document.write("<p>Això escriu dins el body (.js extern)</p>");

console.log("%cAQUÍ COMENÇEN ELS EXERCICIS:","color:red;font-weight:bolder;")



//* ------------------------ Variables --------------------------

// exercici 1: intercanvi de variables

var primer, segon;

primer = 1;

segon = 2;

// TODO: aquí el teu codi

console.log("%c-----------  EXERCICI 1  ------------","color:orange;");
console.log(primer,segon);  // ha de mostrar 2 1



//* ------------------------- Funcions --------------------------

// exercici 2: defineix una funció psicologo() que et pregunti "Com estàs?" al executar-la

// TODO: aquí la definició de psicolog() 
console.log("%c-----------  EXERCICI 2  ------------","color:orange;");
psicologo();

function psicologo(){
    console.log("Com estàs?");
}
// exercici 3: defineix una funció pregunta() que et pregunti "T'agrada la pizza?"
// quan li introduim com a paràmentre "la pizza"

// TODO: aquí la definició de pregunta() 
console.log("%c-----------  EXERCICI 3  ------------","color:orange;");

pregunta("la pizza");

function pregunta(a){
    if (a=="la pizza"){
        console.log("T'agrada la pizza?");
    }else{
             console.log("no se que preguntar");
            }
}

// exercici 4: defineix una funció pregunta2() que et retorni "T'agrada la pizza amb piña"
// quan li introduim com a paràmentre "la pizza"

// TODO: aquí la definició de pregunta2() 
console.log("%c-----------  EXERCICI 4  ------------","color:orange;");
console.log(pregunta2("la pizza") + " amb piña?");

function pregunta2(a){
    if (a == "la pizza"){
        return "T'agrada la pizza";
    } else{
        return " eww";
    }
}

// exercici 5: defineix una funció metresCubicsALitres() que passi metres cúbics a litres i retorni el resultat
// i una altra mostrarSolució() que usi la primera per mostrar per la consola "X metres cúbics són Y litres"

var m3 = 8;

// TODO: aquí les definicions de metresCubicsALitres() i mostrarSolució() 
console.log("%c-----------  EXERCICI 5  ------------","color:orange;");


console.log(metresCubicsALitres(m3)); 
mostrarSolució();

function mostrarSolució(){
    console.log(`${m3} metres cúbics són ${metresCubicsALitres(m3)}`);
}
function metresCubicsALitres(a){
   var a = a*1000;
    return a + "litres";
}

// exercici 5: defineix dues funcions afegirDiners() i gastarDiners() que sumi/resti a una variable externa el valor
// indicat al paràmetre i mostri a la consola la quantitat actual de diners

var diners = 0;

// TODO: definició de afegirDiners() i gastarDiners() 
console.log("%c-----------  EXERCICI 6  ------------","color:orange;");

AfegirDiners(20);
gastarDiners(15);
AfegirDiners(40);
gastarDiners(25);

console.log(diners); // això retornarà 20



function AfegirDiners(a){
     diners = a+diners;
    
    
   
}
function gastarDiners(a){
     diners = diners - a;
    
    
}

//* ------------------------------ Condicionals --------------------------------

// exercici 6: fes un diàleg que et demani la talla de samarreta que vols comprar (S, M, L, XL) i et digui per la consola
// quina talla has sel·leccionat i t'avisi si sel·lecciones una talla que no és vàlida

var talla = prompt("Escollir talla")  // TODO: editar el missatge del prompt()

// TODO: estructura condicional que digui per la consola la talla escollida
console.log("%c-----------  EXERCICI 7  ------------","color:orange;");

if (talla == "s" || "S"){
    console.log("has escollit la talla S");
} else if (talla == "m" || "M"){
    console.log("has escollit la talla M");
} else if (talla == "l" || "L"){;
    console.log("has escollit la talla L");
} else if (talla == "xl" || "XL"){;
console.log("has escollit la talla XL");
} else console.log("La talla escollida no existeix");

// exercici 7: defineix una funció amb modes que pugui calcular l'area o el perímetre d'un cercle i et faci console.log()
// de la cosa calculada

var radi = 5;
var mode = prompt(" Escoger A (area) o P (perímetro)"); // "P" pel perímentre o "A" per l'àrea

// TODO: defineix la funció cercle amb dos modes
console.log("%c-----------  EXERCICI 8  ------------","color:orange;");
cercle(radi, mode);

function cercle(A,P){
    if (mode == "A"){
        radi = Math.PI * radi**2;
        console.log(`L'area del cercle és de ${radi.toFixed(2)}cm²`);
    }else if (mode == "P"){
        radi = 2 * Math.PI * radi;
        console.log(`El perimetre del cercle és de ${radi.toFixed(2)}cm`);

    } else console.log("No sé que vols");
}





// exercici 8: defineix una funció que calculi l'àrea i el perímetre d'un polígon regular de N costats (3, 4, 5, 6...)

var costat = 3;
var costats = 5;

// TODO: defineix la funció poligon()
console.log("%c-----------  EXERCICI 9  ------------","color:orange;");

poligon(costat, costats);


function poligon(c, cs){
    var area, perimetre;
    // var angulo = 360/cs;
    var apotema = c / (2*Math.tan(Math.PI/cs));

    perimetre = c * cs;
    area = (perimetre*apotema)/2;
    console.log(`L'area del poligon es de ${area.toFixed(2)}cm² y el perímetre de ${perimetre}cm`);
    
}


// exercici 9: defineix una funció que et pregunti per prompt() quin item vols (samarreta, pantaló i barret), si és barret
// que et faci sel·leccionar el tipus (copa, pirata, gorra, llana), si és samarreta o pantaló que et faci sel·leccionar el color
// (pel color no hi ha opcions, és lliure) i et faci sel·leccionar la talla (S, M, L, XL). La funció retorna una cadena
// amb tota la informació per pintar-la en un console.log()

// TODO: defineix la funció botiga()
console.log("%c-----------  EXERCICI 10  ------------","color:orange;");

var carrito = botiga();

console.log(carrito);  // això tornarà "Has demanat un barret de pirata (talla L)"

// console.log(botiga());
function botiga(){
    var item= prompt("Quin item vols?(samarreta, pantaló o barret)");
    var tipo;
    var color;
    var talla;
    if (item=="barret"){
        tipo=prompt("Quin tipus vols?(copa, pirata, gorra, llana)");
        talla=prompt("Quina talla necessites?").toLowerCase();
    } if(tipo=="copa" || tipo=="pirata" || tipo=="gorra" || tipo=="llana"){
        console.log(`Has escollit un barret de tipo ${tipo} de la talla ${talla}.`);      
        
    } else if (item=="samarreta" || item=="pantaló"){
        color=prompt("Quin color vols?");
        talla=prompt("Quina talla necessites?").toLowerCase();
        console.log(`Has escollit un/a ${item} de la talla ${talla} i de color ${color}.`);
    } else console.log("Sort en una altre tenda;)");
    
}
//* ---------------------------- Mètodes numbers -------------------------------

// exercici 11: defineix una funció calculadora que agafi com a paràmentres una operació i un o dos números 
// (que poden ser sencers, decimals o fraccions) i faci la operació (+, -, *, /, potència, arrels quadrades i qúbiques)

// TODO: defineix la funció calculadora() (reutilitza la que vam fer a classe fa uns dies)
console.log("%c-----------  EXERCICI 11  ------------","color:orange;");

calculadora(prompt("operació aquí"));

function calculadora(a,b,s){
    if (s == "+") {
        console.log(`${a} més ${b} és ${parseFloat(a)+parseFloat(b)}`);

     } else if (s == "-"){
        console.log(`${a} menys ${b} és ${a-b}`);

     } else if (s == "*"){
         console.log(`${a} multiplicat per ${b} és ${a*b}`);

     } else if (s == "/" && b!= 0){
         console.log(`${a} dividit per ${b} és ${a/b}`);

     } else if (s == "/" && b== 0){
         console.log(`${a} dividit per ${b} és ${a/b}`);

     } else if (s == "**"){   
         console.log(`${a} elevat a ${b} és ${a**b}`); 


     } else if (s == "%"){
         console.log(`La resta de dividir ${a} per ${b} és ${a%b}`);
     
     } else {
         console.log(`%c"${s}" no és una operacio valida`, `color: red;`);
     }
     

     
 }

// exercici 12: a partir de tres números, calcula si poden ser els tres costats d'un triangle rectangle
console.log("%c-----------  EXERCICI 12  ------------","color:orange;");

var c1, c2, c3;

c1 = 3;
c2 = 4;
c3 = 5;


console.log(triangleRectangle(c1,c2,c3));  // ha de tornar true

c4 = 4;
c5 = 5;
c6 = 6;

console.log(triangleRectangle(c4,c5,c6));  // ha de tornar false

// TODO: defineix la funció triangleRectangle()
function triangleRectangle(a,b,c){
    if (c**2 == b**2 + a**2){
     
     console.log(true, "és un triangle rectangle");
 }  else console.log(false,"no es un triangle rectangle"); 
 }




// exercici 13: a partir de dos catets, calcula la hipotenusa i els angles d'un triangle rectangle
console.log("%c-----------  EXERCICI 13  ------------","color:orange;");

var c1 = 30;
var c2 = 40;


// TODO: defineix la funció calculaHipotenusa()
var hipo;
function calculaHipotenusa(a,b){
    hipo;
    hipo = Math.sqrt(a**2 + b**2);
    console.log(`L'hipotenusa és ${hipo}`);
}
// TODO: defineix la funció calculaAngles()

console.log(calculaHipotenusa(c1,c2));  // ha de donar 50

console.log(calculaAngles(c1,c2));      // ha de donar 30º i 60º

function calculaAngles(a,b){
   var angle1;
   var angle2;
    angle1= Math.asin(b / hipo) ;
    
    angle2= Math.asin(a / hipo) ;

    console.log(`L'angle és de ${(angle1 *180)/Math.PI}º i de ${angle2 *(180/Math.PI)}º`);
    
}


//* ---------------------------- Mètodes strings -------------------------------

//! ⚠️ en aquests exercicis no s'hi val usar el mètode .split() a no ser que s'indiqui el contrari ⚠️

// exercici 14: recrea la funció parseInt() de manera que agafi els números encara que hi hagi lletres abans
// p.e: "hola89234" ha de tornar "89234", "43'35465adeu" ha de tornar "43", "amor45.9odi" ha de tornar "45"

// TODO: defineix la funció convertirEnEnter()
console.log("%c-----------  EXERCICI 14  ------------","color:orange;");


console.log(convertirEnEnter("hola89234"));     // ha de tornar 89234
console.log(convertirEnEnter("43.35465adeu"));  // ha de tornar 43
console.log(convertirEnEnter("amor45.9odi"));   // ha de tornar 45



function convertirEnEnter(a){
    
    a=a.replace(/[^\d.-]/g, ''); 
    return parseInt(a);

}


// exercici 15: recrea la funció parseFloat() de manera que agafi els números encara que hi hagi lletres abans
// i accepti com a separador decimal els símbols ",", "." i "'"
// p.e: "hola89'234" ha de tornar "89.234", "43'35adeu" ha de tornar "43.35", "amor45.9odi" ha de tornar "45.9"

// TODO: defineix la funció convertirEnDecimal()
console.log("%c-----------  EXERCICI 15  ------------","color:orange;");

console.log(convertirEnDecimal("hola89'234"));     // ha de tornar 89.234
console.log(convertirEnDecimal("43'35adeu"));      // ha de tornar 43.35
console.log(convertirEnDecimal("amor45.9odi"));    // ha de tornar 45.9

function convertirEnDecimal(d){
    d=parseFloat(d);
    return d;

}


// exercici 16: recrea la funció "valor absolut", que torna el mateix número si és positiu i el mateix número
// canviat de signe si és negatiu (-2 -> 2; -3.4 -> 3.4). No s'hi val usar Math.abs()

// TODO: defineix la funció valorAbsolut()

console.log(valorAbsolut(-3.14));        // ha de tornar 3.14
console.log(valorAbsolut(0));            // ha de tornar 0
console.log(valorAbsolut(1234.5678));    // ha de tornar 1234.5678
console.log(valorAbsolut(-1234.5678));   // ha de tornar 1234.5678

function valorAbsolut(){

}
// exercici 17: crea una funció que agafi un string i que torni una lletra aleatoria (sense contar espais i signes 
// de puntuació)

var lletres = "abcdef";

console.log(lletraRandom(lletres));     // torna una lletra entre la a i la f

// TODO defineix la funció lletraRandom()


// exercici 18: crea una funció que agafi un text i li'n separi les paraules (sense signes de puntuació) i les torni
// en un nou string separades per espais

var text = "En un lugar de La Mancha de cuyo nombre no quiero acordarme. Què tal, Manel?   Patata"

var paraules = separarParaules(text);

// TODO: defineix la funció separarParaules()

console.log(paraules);


// exercici 19: crea una funció que agafi un string i que torni una paraula aleatòria continguda en ella (podeu cridar
// la funció separarParaules() dins d'aquesta funció)

console.log(paraulaRandom(text));

// TODO defineix la funció paraulaRandom()


// exercici 20: crea una funció que agafi una data DD/MM per prompt() i et retorni el teu signe de l'horòscop i una 
// predicció del que et passarà durant el dia

// TODO deifineix la funció horoscop()



//* ------------------------------ Bucle for ------------------------------------



//* ----------------------------- Bucle while -----------------------------------



//* ---------------------------- Mètodes arrays ---------------------------------