let evenNumbers = [0, 2, 3, 4, 5, 6, 8, 11, 14];

let verify = evenNumbers.every(num => num % 2 === 0);
console.log(verify);

if (verify === false) {
    evenNumbers = evenNumbers.filter((el) =>{
        if (el % 2 === 0) {
            verify = true
            return el;
        }
    });
}

console.log(evenNumbers);
console.log(verify);

function isPrime(num) {
    for(let i = 2; i < num; i++) {
        if (num % i === 0){
            return false;
        }
    }
    return num > 1;
}

const numArray = [12, 11, 44, 22, 36]
console.log(numArray.some(isPrime));