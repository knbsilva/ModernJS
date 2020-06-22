const prod1 = {};
prod1.nome = 'Celular';
prod1.preco = 500;
prod1['desconto'] = 0.40;

console.log(prod1);

const prod2 = {
    nome: 'geladeira',
    preco: 50,
    obj: {
        teste1: 1,
        obj: {
            teste2: 2
        }
    }
};

console.log(prod2);