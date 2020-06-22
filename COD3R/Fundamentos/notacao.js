console.log(Math.ceil(6.1));

const obj1 = {};
obj1.nome = 'bola';
console.log(obj1.nome);

function objeto(nome){
    this.nome = nome // permite uma variável usada fora de escopo
    this.nfun = function(){
        console.log('deu certo')
    }
};

const obj2 = new objeto('cadeira');
const obj3 = new objeto();

console.log(obj2.nome);
obj3.nfun();

