// Unário

let num1 = 1;
let num2 = 2;

num1++
--num1 // tem maior precedência que posfix

// Ternário

function resultado(nota){
    if (nota >= 7){
        console.log('Aprovado');
    } else {
        console.log('Reprovado')
    }
};

resultado(8);