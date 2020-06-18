// Os comentários de uma linha começam com dois caracteres de barra.
/* Comentários de várias linhas 
utilizam uma barra e um asterisco */

/* VARIÁVEL - O nome da variável só deve conter letras, dígitos ou símbolos ( $ e _) e 
o primeiro caractere não deve ser um dígito. */

let variável; // -> declarando
variável = 'Olá'; // -> atribuindo
let variável2 = 'Olá2'; // -> modo conciso
let variável3 = 'Olá3', variável4 = 'Olá4', variável5 = 'Olá5'; // declarando e atribuiindo variáveis em uma linha
let variável6 = variável5 // -> copiando o mesmo valor para outra variável

// CONSTANTES - para declarar uma variável imutável.
const dataDeAniversario = '30.06.1992';

/* TIPOS DE DADOS - existem OITOS tipos básicos em JS

NÚMEROS - inteiros e ponto flutuante, além dos regulares, existem
os "valores númericos especiais" que pertencem a esse tipo de dados 
Infinity, -Infinity e NaN */
// NaN -> é o resultado de uma operação matemática incorreta ou indefinida.

/* STRING
Aspas - ""
Aspas simples - ''
Backticks - `` [são citações de funcionalidade estendida, 
permitem incorporar variáveis e expressões em uma string,
envolvendo-as ${...}] */

console.log(`Aqui se encontra a variável, ${variável5} e minha data de aniversário é ${dataDeAniversario}`)

/* NULL - Em JS é apenas um valor que representa "nada", "vazio" ou "valor inexistente"
UNDEFINED - Significa um "valor não atribuído" */

//TYPEOF - É um operador que retorna o tipo do argumento
//INTERAÇÃO: alert, prompt E confirm

//CONVERSÕES DE TIPO
let valor = true;
console.log(`O tipo é ${typeof valor}.`);
valor = String(valor);
console.log(`O tipo é ${typeof valor}.`);
valor = '123';
valor = Number(valor);
console.log(`O tipo é ${typeof valor}.`);
valor = Boolean(valor);
console.log(`O tipo é ${typeof valor}.`);

// Operadores básicos, matemática. [unário, binário e operando]
// +, -, *, /, %, **

//Concatenação de strings com binário
let palavra = 'para' + 'lelo';
console.log(palavra);

/*Se um operador for strings o outro também será convertido. [exclusivo do binário +]
Demais operadores aritiméticos apenas trabalham com números os convertendos. */

let subtracao = '50' - 10, multiplicacao = '2' * 20, divisao = 10 / '2';
console.log(subtracao, multiplicacao, divisao);

/* Conversão numérica, unária +
O plus unário, não faz nada com os números. Mas se o operando
não for um número, o unário + o converterá em um número
Faz a mesma coisa que o Numner()*/
let macas = '2';
let laranjas = '3'
console.log(+macas + +laranjas + ' (unária+)');

/* As atrubuições encadeadas são avalidas da direita para a esquerda. */
// a = b = c = 2 + 2

/* Change-and-assign !!!
n += x;
n -= x;
n /= x;
n *= x;
... */

/* INCREMENTO - DECREMENTO 
Incremento e decremento só pode ser aplicado a variáveis.
Os osperadores ++ e -- podem ser colocados antes e depois de uma variável
...++ -> postfix retorno o valor antigo(antes do incremento)
--... -> prefix retorna o o novo valor
Porém ambos aumentam ou diminuim o valor */
// incremento / decrésimo entre outros operadores

/* OPERADORES BIT a BIT
and &
or |
xor ^
NOT ~
left shift <<
right shift >>
shift direito de enchimento zero >>> */

// VÍRGULA

/* COMPRAÇÔES -> Todos os operadores de comparação retornam um valor booleano
Um resultado de comparação pode ser atribuído a uma variável
a > b, a < b
a <= b, a<= b
a == b
a != b
Comparação de STRINGS -> o JavaScript usa 'dicionário' ou ordem 'lexicográfica,
as sequências de caracteres são comparadas letra por letra
Comparação de TIPOS DIFERENTES -> Ao comparar valores de tipos diferentes, o JvaScript converte os valores em números.
Para valores booleanos, true = 1 e false = 0

IGUALDADE ESTRITA
Operador == -> Operando de tipos diferentes são convertidos em números pelo operador.
Operador === -> Verifica a igualdade sem conversão de tipo
!== 'não-igualdade estrita'
*Comparação com NULO e INDEFINIDO */
 
/* OPERADOR CONDICIONAL '?'

let result = (condition) ? value1 : value2;
                x > y     true  :  false
*/

/* OPERADORES LÓGICOS
Existem três operadores lógicos no JavaScript ...
|| (OR) -> Avalia operandos da esquerda para direita, converte-o em booleano e se o resultado for true, para e retorna o valor original
        -> Se todos os operandos foram avaliados(false), retorna o último operando
* A precedÊncia de && é amior que ||
&& (AND) -> Avalia operando da esquerda para direita
         -> Se todos os operandos foram avaliados(false), retorna o valor opriginal desse operando
         -> Se todos os operandos foram avaliados(True), retorna o último operando
* A precedÊncia de ! é a mais alta de todos os operadores lógicos
! (NOT)  -> Converte o operando o tipo booleano: true/false, retornando o valor inverso.

Operador coalescente nulo '??'
|| retorna o primeiro valor de verdade
?? retorna o primeiro valor definido
*/

/* LOOPS> WHILE e FOR !!!!!!!!
Se o corpo do loop tiver uma única instrução, podemos omitir as chaves {…}:

do{
    //loop body
} while (condition);
* Essa forma de sintaxe deve ser usada apenas quando você deseja que o corpo do loop seja executado pelo menos uma vez,
indepedentemente da condição ser verdadeira.
---
for ((1)begin; (1.1)condition; (2.1)step){
    // (2)loop body
}
begin - executa uma vez ao entrar no loop
condition - verificado antes de cada iteração de loop. Se falso, o loop é interrompido
body - é executado repetidamente enquanto a condição é verdadeira
step - execut após o corpo em cada iteração

Run begin
-> (if condition -> run body and run step)
-> ...

for (let i = 0; i < 3; i++){
    // loop body
}
* Na função acima, a variável i é declarada no loop, isso é chamada de declaração 'inline'. Tais variáveis são visíveis apenas dentro do loop.
* Pode-ser usar uma várias externa fora do loop
* Qulquer parte do 'for' pode ser ignorada. 

BREAK LOOP !!
break;

CONTINUE !!
A diretiva 'continue' é uma versão mais leve do 'break'. 
Ele interrompe a iteração atual e força o loop a iniciar um novo(se a condição permitir)
continue;

LABELS for break/continue
Um rótulo é um identificador com dois pontos antes de um loop:

labelName: for (...){
    for (...){
        if (!input) break labelName;
    }
}
console.log('output depois do break label');
*/
/* DECLARAÇÃO SWITCH
O switch pode substituir várias verificações if

switch(x) {
    case 'value1': // if (x === 'value1')
    ...
    [break]

    default:
        ....
}

-> O valor de x é verificado para uma estrita igualdade com o valor do primeiro case e depois o segundo e assim por diante.
-> Se a igualdade for encontrada, switch começa a executar o código a partir do correspondente case, até mais o próximo break(ou até o final de swtich)
-> Se nenhum caso for correspondido, o default código será executado (se existir)

AGRUPAMENTO de 'case'
Ambos 3 e 5 mostram a mesma mensagem.

switch(x){
    case 3:
    case 5:
        console.log(a);
        console.log(b);
        break;
}
*/
/* FUNÇÕES







