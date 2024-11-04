let rank = 10;

switch(rank) {
    case 1:
        console.log('Medalha de Ouro!');
        break;
    case 2:
        console.log('Medalha de Prata');
        break;
    case 3:
        console.log('Medalha de Bronze');
        break;
    default:
        console.log('Medalha de Participação!');
        break;
}

let energy = 60;
let weather = "Ensolarado"

if (energy >= 60) {
    switch (weather){
        case "Ensolarado":
            console.log("Vou a praia!");
            break;
        case "Nublado":
            console.log("Vou ao cinema!");
            break;
        case "Chovendo":
            console.log("Vou ler um livro!");
            break;
        default:
            console.log('Clima desconhecido');
    }
} else {
    console.log('Não vou fazer nada hoje!');
}
