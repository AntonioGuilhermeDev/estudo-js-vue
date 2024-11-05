const sum = function(n1, n2){
    return n1 + n2;
}

console.log(sum(1,2));

const sub = function(n,...numbers){
    for(let num of numbers){
        n -= num;
    }
    return n;
}

console.log(sub(50,2,4,1));

// Funcao construtora

const f = new Function("n1", "n2", "return n1 + n2" );

console.log(f(1,2));