const valores = [1.0, 2.1, 3.0, 4.1];
console.log(valores[0], valores[3]); // consulta o valor com base no índice

valores[4] = 10; // adiciona valor e novo índice  no array
console.log(valores);
console.log(valores.length);

valores.push({aa: 3}, false, 'teste', 5,0);
console.log(valores);

console.log(valores.pop()); //retira o último valor e retorna na tela ou variável
console.log(valores);
delete valores[1];
console.log(valores);




