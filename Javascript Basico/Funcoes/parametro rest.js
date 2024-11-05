// Parametro rest deve ser utilizado quando nao souber a quantidade de parametros esperados

function sum (...numbers){
    let result = 0;

    for (let i of numbers) {
        result += i;
    }
    return result;
}

console.log(sum(10,2,4,50));

function findLongestWord(...word){
    let longest = "";

    for (let i = 0; i < word.length; i++) {
        if (word[i].length > longest.length){
            longest = word[i];
        }
    }
    return longest;
}

console.log(findLongestWord("abobora", "melao", "paralelepipedo"))


function numbersGreaterThan(n, ...numbers){
    let count = 0;
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] > n){
            count++;
        }
    }
    return count;
}

console.log(numbersGreaterThan(20,2,3,40, 30, 70));