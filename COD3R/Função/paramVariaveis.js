function soma(){
    let soma = 0
    for (i in arguments){ // arguments é um array 
        soma += arguments[i]
    }
    return soma
}

console.log(soma(1,2,3))
console.log(soma('a,', 'b', 4, 3))

// Paâmetro Padrão (1)

function soma1 (a,b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(1,2,3), soma1(0,0,0))

// (2,3,4) pra gerar valor padrão

// valor padrão do es2015

function soma3(a =1, b= 1, c =1){
    return a + b + c
}
console.log(soma3(), soma3(3), soma(1,2,3), soma(0,0,0));