const box1 = document.querySelector('#box1');
const box2 = document.querySelector('#box2');
const btn = document.querySelector('#btn-copy');
const allLang = [...document.querySelectorAll('.lang')];

allLang.map((el) =>{
    el.addEventListener('click', (event) =>{
        const lang = event.target;
        lang.classList.toggle('selected');
    })
})

btn.addEventListener('click', () =>{
    const langSelected = [...document.querySelectorAll('.selected')];
    const langNotSelected = [...document.querySelectorAll(('.lang:not(.selected)'))];

    langSelected.map((el) =>{
        box2.appendChild(el);
    })
    langNotSelected.map((el) =>{
        box1.appendChild(el);
    })
})

