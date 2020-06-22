// cadeia de caracteres

const escola = 'cod3r';

console.log(escola.charAt(1)); // retorna o valor do índice
console.log(escola.charCodeAt(2)); // retornar o código unicode do valor índice
console.log(escola.indexOf('r')); // procura o valor e retorna sua posição de índice

console.log(escola.substring(1)); //retorna os valores da variável a apartir do índice estipulado 
console.log(escola.substring(0,3)); // retorna os valores da variável entre os índices estipulados

console.log('escola '.concat(escola).concat('!')); // concatenar valores literais e variáveis
console.log('escola ' + escola + '!'); // outra forma de concatenar

console.log(escola.replace(3, 'e')); // substituir valor por índice
console.log('um, dois, tres'.split(',')); // criar um array com strings

// TEMPLATE STRING

const nome = 'kleber';
const template = `Olá ${nome}`;
console.log(template);
console.log(`1 + 1 = ${1+1}` ); // expressão com back tite

const funcao = texto => texto.toUpperCase();
console.log(`${funcao('cuidado')}`);



