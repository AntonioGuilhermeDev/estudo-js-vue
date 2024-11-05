// Mostra numeros pares no range escolhido

function* evenGenerator(n1, n2){
    while (n1 <= n2){
        if (n1 % 2 === 0){
            yield n1;
        }
        n1++
    }
}

const even = evenGenerator(1, 20);

console.log(even.next().value);
console.log(even.next().value);
console.log(even.next().value);
console.log(even.next().value);
console.log(even.next().value);
console.log(even.next().value);
console.log(even.next().value);
console.log(even.next().value);
console.log(even.next().value);
console.log(even.next().value);
console.log(even.next().value);

// Mostra os numeros da sequencia de fibonacci ate o limite maximo
// Como funciona: A sequência de Fibonacci é uma série numérica onde cada número é a soma dos dois anteriores, começando geralmente com 1 e 1.

function* fibonacciGenerator(limit){
    let a = 1;
    let b = 1;

    while (a <= limit){
        yield a;
        c = a + b;
        a = b;
        b = c;
    }
}

const fibonacci = fibonacciGenerator(100);

console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
