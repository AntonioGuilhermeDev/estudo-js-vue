function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min)) + min;
}

function wait(msg, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== "string") reject(false);
            resolve(msg);
        }, time);
    });
}

wait('Conectando a base de dados...',rand(1,3))
    .then(answer => {
        console.log(answer);
        return wait('Buscando dados...',rand(1,3));
    }).then(answer => {
        console.log(answer);
        return wait('Validando dados...',rand(1,3));
    }).then(answer => {
        console.log(answer);
    }).then(() =>{
        console.log("Exibindo dados.");
    })

console.log("Eu serei exibido em paralelo a promise")

//Metodos para promisses

const promises = [
    wait('Promise 1', rand(1, 5)),
    wait('Promise 2', rand(1, 5)),
    wait('Promise 3', rand(1, 5)),
    //wait(1000, 1000),
]

//Metodo .all

Promise.all(promises) //Exibe quando todas ja tiverem retornado e se uma der erro todas serao rejeitadas
.then(function (value) {
    console.log(value);
})
.catch(function (error) {
    console.log(error);
})

Promise.race(promises) // Exibe assim que a primeira estiver pronta mesmo sendo um erro
.then(function (value) {
    console.log(value);
})
.catch(function (error) {
    console.log(error);
})

//Metodo resolve

function downloadPage() {
    const onCache = false;

    if (onCache) {
        return Promise.resolve('Pagina em cache');
    } else {
        return wait('Pagina baixada!', 3000)
    }
}

downloadPage()
    .then(pageData => {
        console.log(pageData);
    })
    .catch(e => console.log(e));