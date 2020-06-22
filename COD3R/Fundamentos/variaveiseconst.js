/* É possível redaclarar uma variável 'var' no mesmo escopo.
Não é possível redaclarar uma variável 'let'no mesmo escopo */

var a = 3;
let b = 4;
const c = 5;

console.log(a,b,c);

// par nome/valor

const saudacao = 'opa'; // contexto léxico 1

function exec(){
    const saudacao = 'fala' // contexto léxico 2
    return saudacao
};

// objetos são grupos aninhado de pares nome/valor
const cliente = {
    nome: 'Pedro',
    peso: 32,
    idade: 12
};

console.log(saudacao);
console.log(exec());
console.log(cliente);