const pesoInput = document.getElementById("peso");
const alturaInput = document.getElementById("altura");
const form = document.querySelector("form");
const resultado = document.querySelector(".results p");

function calcularImc(peso, altura){
    altura = altura/100
    return peso / (altura * altura)
}

form.addEventListener("submit", function(event){
    event.preventDefault();

    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    if (peso <= 0 || altura <= 0){
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    const imc = calcularImc(peso, altura).toFixed(2);
    let desc = ""
    if (imc < 18.5){
        desc = "Abaixo do peso"
    } else if (imc >= 18.5 && imc <= 24.9){
        desc = "Peso normal"
    } else if (imc >= 25.0 && imc <= 29.9){
        desc = "Sobrepeso"
    } else if (imc >= 30.0 && imc <= 34.9){
        desc = "Obesidade Grau 1"
    } else if (imc >= 35.0 && imc <= 39.9){
        desc = "Obesidade Grau 2"
    } else{
        desc = "Obesidade Grau 3"
    }
    console.log(imc);

    resultado.innerHTML = `Seu IMC: ${imc} <br> ${desc}`;
})