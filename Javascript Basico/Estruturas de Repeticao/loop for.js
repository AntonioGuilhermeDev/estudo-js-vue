// Estrutura
// for (inicalizar contador; condicao; controle do contador)


for (let i = 0; i <= 10; i++){
    console.log("Valor atual: " + i);
}
console.log('Fim!');

// For In - posicoees respectivas para cada elemento

let num = [10, 20, 30, 40, 50];

for(n in num){
    console.log(n)
}

// For of - valores respectivos para cada elemento

for(n of num){
    console.log(n)
}