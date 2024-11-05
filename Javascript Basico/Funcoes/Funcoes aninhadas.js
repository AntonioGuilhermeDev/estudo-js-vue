// Calculadora com funções aninhadas

let op = "-"

const calc = (...numbers) => {
        const sum = num =>{
            let result = 0;
            for (let v of num) {
                result += v;
            }
            return result;
        };

        const sub = num =>{
            let result = num[0];
            for (let v of num.slice(1)) {
                result -= v;
            }
            return result;
        };

        const mult = num =>{
            let result = 1;
            for (let v of num) {
                result *= v;
            }
            return result;
        };

        const div = num =>{
            let result = num[0];
            for (let v of num.slice(1)) {
                if (v === 0){
                    return "Erro: Divisao por zero"
                }
                result /= v;
            }
            return result;
        };

        if (op === "+"){
            return sum(numbers);
        }
        else if (op === "-"){
            return sub(numbers);
        } else if (op === "*"){
            return mult(numbers);
        } else if (op === "/"){
            return div(numbers);
        } else{
            return "Operador Invalido"
        }
}

console.log(calc(10, 2));