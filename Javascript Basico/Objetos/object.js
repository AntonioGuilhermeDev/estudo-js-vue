class Car {
    constructor(name, type) {
        this.name = name

        switch (type) {
            case 1:
                this.type = "Esportivo"
                this.velmax = 300;
                break;
            case 2:
                this.type = "Utilitario"
                this.velmax = 100;
                break;
            case 3:
                this.type = "Militar"
                this.velmax = 180;
                break;
            default:
                this.type = "Comum"
                this.velmax = 100;
        }
    }
    getName(){
        return this.name;
    }

    getType(){
        return this.type;
    }

    getVelo(){
        return this.velmax;
    }

    info(){
        console.log(`Nome: ${this.name}`)
        console.log(`Tipo: ${this.type}`);
        console.log(`Vel: ${this.velmax}`);
        console.log("------------------------")
    }

    rename(name){
        this.name = name;
    }

    setType(type){
        this.type = type;
    }
    setVelo(velo){
        this.velo = velo;
    }
}

let car1 = new Car('Corrida', 1)
let car2 = new Car('Trabalho', 2)
let car3 = new Car('Normal', 0)

car1.info();
car2.info();
car3.info();