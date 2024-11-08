const objs = [
    {
        "name": "Guilherme",
        "age": 18,
        "isWorking": true,
        "details": {
            "Occupation": "Estagiario",
            "Corporation": "Corporation123"
        },
        "hobbies": ["Programar", "Ler"]
    },
    {
        "name": "Antonio",
        "age": 25,
        "isWorking": false,
        "details": {
            "Occupation": null,
            "Corporation": null
        },
        "hobbies": ["Jogos", "Desenhar"]
    }
]

//Transformar objeto em json

const jsonData = JSON.stringify(objs);

console.log(jsonData);
console.log(typeof jsonData);

//Json para objeto

const objData = JSON.parse(jsonData);
console.log(objData);

objData.map((person) => {
    console.log(person.name);
    console.log(person.age);
})