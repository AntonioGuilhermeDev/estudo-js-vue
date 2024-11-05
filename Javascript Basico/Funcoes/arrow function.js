
const evenOrOdd = (num) => {
    return (!(num%2) ? "Par" : "Impar")
}
console.log(evenOrOdd(1))



const averageCalculator = (num1, num2, num3) => {
    return (num1 + num2 + num3) / 3
}
console.log(averageCalculator(10, 10, 10))



const fuseString = (str1, str2) => {
    return str1 + " " + str2
}
console.log(fuseString("averageCalculator", "evenOrOdd"));




const date = () => new Date().getDate();
console.log(date());



const sum = (...numbers) => {
    let result = 0;
    for (let i of numbers){
        result += i;
    }
    return result;
}

console.log(sum(10,2,4,50));


