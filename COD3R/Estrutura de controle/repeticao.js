function inteiroaleatorio(min, max){
    const valor = Math.random() * (max - min) + min//random gera valor entre 0-1
    return Math.floor(valor)
}

let opcao = 0;

while (opcao != -1){
    opcao = inteiroaleatorio(-1, 10)
    console.log(`Número ${opcao}`)
}

/*do-while

do{

} while ()
*/

// for

for (let i = 1; i<= 10; i++){
    console.log(`i = ${i}`)
}


