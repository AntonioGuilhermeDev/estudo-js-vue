
// Function nomeDaFuncao(parametros)

function name(a) {
    console.log(a)
}

name('Guilherme'); // Chamada da funcao

function soma(a, b) {
    console.log(a + b)
}

for(let i=0; i<10; i++){
    soma(i, i)
}

// Funcoes que retornam valores

function mulltiplicar(x, y){
    let res = x * y;
    return res;
}

console.log(mulltiplicar(5, 10));

let numMult = mulltiplicar(15, 20)
console.log(numMult);


function evenOrOdd(n){
    if (n%2 === 0){
        return "Par";
    } else{
        return "Impar";
    }
}

let n = 11;
console.log(evenOrOdd(n));

// Parametros padroes - Valor a ser utilizado caso o chamado nao informe o parametro

function subtrair(x=0, y=0){
    return x - y;
}

console.log(subtrair(5));