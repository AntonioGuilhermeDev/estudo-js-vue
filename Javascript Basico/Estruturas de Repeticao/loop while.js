let n = 0;

/* Loop Infinito

while(true){
    console.log("Ola Mundo!")
}
*/

//Loop limitado

while (n < 10) {
    console.log(n);
    n++;
}

//Calculadora Fatorial

let number = 5;
let fatorial = 1;

while (number >= 1){
    fatorial *= number;
    number--
}

console.log(fatorial);

// Do While - Realiza uma acao (do) antes de realizar a verificacao logica (whule) mesmo que seja falsa

n = 1;
do{
    console.log("Hello World");
    n++
} while(n > 10)
console.log(n);