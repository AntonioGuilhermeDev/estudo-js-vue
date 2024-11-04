// O operador ternario retorna caso verdadeiro a primeira opção e caso falso a segunda
// teste logico ? se verdadeiro : se falso


let num = 10;
let res = (num%2) ? "Par" : "Impar";
console.log(res);

// 0 é considerado false

res = (!(num%2) ? "Par" : "Impar");
console.log(res);


let number1=10, number2=20, number3=30, number4=40;
res = (number1 < number2) && (number2 < number3) ? "verdadeiro" : "falso"
console.log(res)