let number = 0;
let max = 1000
let even = 0;

//Break - Para a execucao do loop imediatamente

while(number < max){
    console.log("Valor atual: " + number)
    if (number >= 10){
        break;
    }
    number++
}
console.log("Fim!");

// Continue - Para a iteracao atual e continua para a proxima

for(let i = number; i < max; i++){
    console.log("Valor atual: " + i)
    if(i%2 !== 0){
        continue
    }
    even++
}
console.log("Quantidade de pares" + even);
console.log("Fim!")