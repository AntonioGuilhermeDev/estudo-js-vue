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

async function execute(){
    const stage1 = await wait('Conectando a base de dados...',rand(1,3))
    console.log(stage1);
    const stage2 = await wait('Buscando dados...',rand(1,3));
    console.log(stage2);
    const stage3 = await wait('Validando dados...',rand(1,3));
    console.log(stage3);
    const stage4 = await wait('Preparando para exibir dados...',rand(1,3));
    console.log(stage4)
    console.log("Fim!");
}
execute();

