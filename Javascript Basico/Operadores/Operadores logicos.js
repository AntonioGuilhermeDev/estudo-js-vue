// && -> AND --> Ambos precisam ser verdadeiros
// || -> OR --> Apenas 1 precisa ser verdadeiro
// ! -> NOT --> Negação (Inverte o valor)

let number1=10, number2=20, number3=30, number4=40;

console.log((number2 > number3) && (number2 < number1));
console.log((number2 > number1) && (number3 < number4));

console.log((number1 == number2)  || (number3 > number2));
console.log((number1 > number4) || (number4 < number1));

console.log(!(number2 > number1) && (number3 < number4));
console.log(!(number1 > number4) || (number4 < number1));

if((number1 < number2) && (number2 < number3)){
    console.log("true")
} else{
    console.log("false")
}

if((number3 < number2) && (number2 < number3)){
    console.log("true")
} else{
    console.log("false")
}

if((number4 < number2) || (number2 < number3)){
    console.log("true")
} else{
    console.log("false")
}

if((number4 < number2) || (number2 > number3)){
    console.log("true")
} else{
    console.log("false")
}

if(!(number4 < number2) || (number2 > number3)){
    console.log("true")
} else{
    console.log("false")
}

if(!(number3 < number2) && !(number2 < number3)){
    console.log("true")
} else{
    console.log("false")
}

