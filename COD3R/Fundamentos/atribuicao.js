const a = 7;
let b = 3;

b += a; // atribuição aditiva
b -= a;
b *= a;
b /= a;
b %=a;

// DESTRUCTURING OBJETO

const pessoa = {
    nome: 'kleber',
    idade: 27,
    endereco: {
        logradouro: 'Rua Nair Silva',
        numero: 44
    }
}

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: nvVariavel, idade: nvVariavel2 } = pessoa;
console.log(nvVariavel, nvVariavel2);

const { endereco: { logradouro, numero }} = pessoa;
console.log(logradouro, numero);

 // DESTRUCTURING ARRAY

 const todasAsNotas = [nota1, nota2, nota3] = [1, 2, 3];
 console.log(todasAsNotas);
 console.log(nota1);

 // DESTRUCTURING OBJETO FUNCTION

 function randi({}){

 }

  // DESTRUCTURING ARRAY FUNCTION

function rand([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min];
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand([]));
console.log(rand([,500]));

