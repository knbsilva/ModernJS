let valor; // não incializada -- não definida
console.log(valor); 

valor = null; // ausência de valor
console.log(valor);

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = undefined; // evite atribuir undefined
console.log(produto.preco);

produto.preco = null // sem preço
console.log(produto.preco);
console.log(produto);