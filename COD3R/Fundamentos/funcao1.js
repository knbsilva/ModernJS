//funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}; 

imprimirSoma(2,3);
imprimirSoma(2);
imprimirSoma(2, 8, 4, 5); // lê as duas primeiras  e ignora os demais

//funcao com retorno
function soma(a, b = 1){
    return a + b
};

console.log(soma(2,3));
console.log(soma(2));

// armazenando um funcao em uma variável
const adicao = function (a, b){
    console.log(a + b)
};

adicao(2,3);

// Armazenando uma funcao arrow em uma variavel
const soma_ad = (a, b) => {
    return a + b 
};

console.log(soma_ad(2,3));

//retorno implícito
const subtracao = (a,b) => a - b;
console.log(subtracao(2,3));
