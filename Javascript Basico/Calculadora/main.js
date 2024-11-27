const teclasNum = [... document.querySelectorAll('.num')]
const teclasOp = [... document.querySelectorAll('.op')]
const teclaRes = document.querySelector('.res')
const tLimpar = document.querySelector('#tlimpar')
const display = document.querySelector('#display')

let sinal = false
let decimal = false

teclasNum.forEach(tecla => {
    tecla.addEventListener('click', (evt) => {
        sinal = false
        if (evt.target.innerHTML === ','){
            if(!decimal){
                decimal = true
                if(display.innerHTML === '0'){
                    display.innerHTML = "0,"
                } else {
                    display.innerHTML += evt.target.innerHTML
                }
            }
        }else{
            if(display.innerHTML === '0'){
                display.innerHTML = ""
            }
            display.innerHTML += evt.target.innerHTML
        }
    })
})

teclasOp.forEach(tecla => {
    tecla.addEventListener('click', (evt) => {
        if(!sinal) {
            sinal = true
            if(display.innerHTML === "0"){
                display.innerHTML = ""
            }
            if(evt.target.innerHTML === "X"){
                display.innerHTML += "*"
            } else {
                display.innerHTML += evt.target.innerHTML
            }
        }
    })
})

tLimpar.addEventListener('click', () => {
    sinal = false;
    decimal = false;
    display.innerHTML = '0'
})


teclaRes.addEventListener('click', () => {
    sinal = false;
    decimal = false;
    display.innerHTML = eval(display.innerHTML)
})
