// Serve para percorrer o array quando precisar utilizar todos os elementos
// array.map((elemento, indice) funcao)


const cursos = ['Computação', 'Direito', 'Medicina', 'Engenharias']

cursos.map((el,i) => {
    console.log("Curso: " + el + " Posição no array: " + i)
})

let c = cursos.map((el,i) => {
    return el
})

console.log(c)

const numbers = [1, 5, 7, 15, 95, 70]

let doubleNumbers = numbers.map((el) => el * 2)

console.log(doubleNumbers);

const stringToInt = (e) => parseInt(e);

let num = ['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(stringToInt);
console.log(num);


