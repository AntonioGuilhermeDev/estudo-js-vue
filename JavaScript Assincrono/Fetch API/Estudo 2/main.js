// Receber dados

let temperatura = document.querySelector("#p_temp");
let nivel = document.querySelector("#p_nivel");
let pressao = document.querySelector("#p_press");
let button = document.querySelector("#btn-texto");

let atualizar = () => {
    const url = "https://32f33539-7f37-49fa-a252-b6d3c12b0aab-00-1zkdxufln8wt4.worf.replit.dev/"
    fetch(url)
        .then(response => response.json())
        .then(data => {
            temperatura.innerHTML = "Temperatura: " + data.temperatura;
            nivel.innerHTML = "Nivel: " + data.nivel;
            pressao.innerHTML = "Pressão " + data.pressao;
        })
}

let intervalo = setInterval(atualizar, 3000);

// Enviar dados

let data = {
    name: 'Guilherme',
    age: 18,
    course: 'Javascript'
}

const sendData = () => {
    const url = "https://32f33539-7f37-49fa-a252-b6d3c12b0aab-00-1zkdxufln8wt4.worf.replit.dev/"
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => console.log(data))
}

button.addEventListener("click", (event)=>{
    sendData();
});