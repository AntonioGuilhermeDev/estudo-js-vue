let number = 7;

if (number >= 10) {
    console.log("O numero é maior ou igual a 10");
} else if (number > 5) {
    console.log("O numero está entre 6 e 10");
} else{
    console.log("Numero menor ou igual a 5");
}

//Obrigatoriedade de voto

let age = 15

if ((age >= 16 && age <= 17) || (age >=70)){
    console.log('Voto facultativo!');
} else if (age >= 18){
    console.log('Voto obrigatorio!');
} else{
    console.log('Não vota!');
}
