function Person (name, age) {
    this.name = name
    this.age = age
    this.getName = function(){
        return this.name;
    }
    this.getAge = function() {
        return this.age;
    }
    this.setAge = function (age) {
        this.age = age;
    }
    this.setName = function (name) {
        this.name = name;
    }
    this.info = function(){
        console.log(`Nome: ${this.name}`);
        console.log(`Idade: ${this.age}`);
        console.log("---------------")
    }
}

let people = []

const btn = document.querySelector('#btnAdd');
const result = document.querySelector('.result');

const addPerson=() =>[
    result.innerHTML = "",
    people.map((p) =>{
        const div = document.createElement('div');
        div.setAttribute('class', 'person');
        div.innerHTML = `Nome: ${p.getName()}<br/>Idade:${p.getAge()}`;
        result.appendChild(div)
    })
]

btn.addEventListener('click', (e) => {
    const nome = document.querySelector('#nome');
    const idade = document.querySelector('#idade');
    const p = new Person(nome.value, idade.value);
    people.push(p);
    nome.value = "";
    idade.value = "";
    addPerson()
    nome.focus();
})