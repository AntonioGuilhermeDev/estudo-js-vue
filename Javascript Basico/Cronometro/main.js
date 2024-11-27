const timer = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const restartButton = document.getElementById('restartButton');
const partialButton = document.getElementById('partialButton');
const registeredPartials = document.querySelector('#registeredPartials');

let interval =null;

let tmpini = null


const contador = () => {
    const tmpatual = Date.now();
    let cont = tmpatual-tmpini
    let seg = cont/1000
    timer.innerHTML = converter(seg)
}

const converter = (seg) =>{
    let hora = Math.floor(seg/3600)
    let resto = seg%3600
    let minuto = Math.floor(resto/60)
    let segundo = Math.floor(resto%60)

    return (hora<10?"0" +hora:hora) + ":" + (minuto<10?"0" + minuto:minuto) + ":" + (segundo<10?"0" + segundo:segundo)

}

startButton.addEventListener('click', () => {
    tmpini = Date.now();
    interval = setInterval(contador, 1000);
})

partialButton.addEventListener('click', () => {
    let partial = "<li>" + timer.innerHTML + "</li>"
    registeredPartials.innerHTML += partial
})

stopButton.addEventListener('click', () => {
    clearInterval(interval);
})

restartButton.addEventListener('click', () => {
    tmpini = Date.now();
    timer.innerHTML = "00:00:00";
    registeredPartials.innerHTML = '';
})

