/* getElementById - Manipular elemento pelo ID

const divC1 = document.getElementById("c1");
const divC2 = document.getElementById("c2");
const divC3 = document.getElementById("c3");
const divC4 = document.getElementById("c4");
const divC5 = document.getElementById("c5");
const divC6 = document.getElementById("c6");

divC1.innerHTML = "Hello World";

const arrayElementos = [divC1, divC2, divC3, divC4, divC5, divC6];

const changeTitles = () => {
    arrayElementos.map((el) => el.innerHTML = "Hello World");
}

*/


/* getElementByTagName

const colecaoDiv = [...document.getElementsByTagName("div")] // Seleciona todas as tags div e coloca em um array
console.log(colecaoDiv)


 */

/* getElementByClassName

const langAll = [...document.getElementsByClassName("lang")];
const langC1 = [...document.getElementsByClassName("c1")]
const langC2 = [...document.getElementsByClassName("c2")]
const langEspecific = document.getElementById("c1");

console.log(langAll);
console.log(langC1);
console.log(langC2);
console.log(langEspecific);

/*
langC2.map((el) => {
    el.classList.add("destaque");
})
 */

/* querySelector e querySelectorAll

//const query_colecaoDiv = document.querySelector("div"); //Apenas o primeiro
const query_colecaoDiv = [...document.querySelectorAll("div[class]")];
console.log(query_colecaoDiv);

const query_langAll = [...document.querySelectorAll(".lang")];
const query_langC1 = [...document.querySelectorAll(".c1")];
const query_langC2 = [...document.querySelectorAll(".c2")];

console.log(query_langAll);
console.log(query_langC1);
console.log(query_langC2);

 */

/*addEventListener

const allLangs = [...document.querySelectorAll('.lang')];
allLangs.map((el) =>{
    el.addEventListener('click', (evt) => {
        const el = evt.target;
        el.classList.add('destaque');
    })
})

const c7 = document.querySelector('#c7');

c7.addEventListener('click',(evt)=>{
    const el = evt.target;
    el.classList.add('destaque');
})

 */

/*createElement

const box = document.querySelector('.box');

langs = ['html', 'css', 'js', 'Dart', 'Go', 'Ruby', 'Python' ];

langs.map((el, index) => {
    const newElement = document.createElement('div')
    newElement.setAttribute('id', "c" + index + 1);
    newElement.setAttribute('class', 'lang c1');
    newElement.innerHTML = el;
    box.appendChild(newElement);
    //removeElement
    newElement.addEventListener('click', (event) =>{
        box.removeChild(event.target);
    })
})

 */