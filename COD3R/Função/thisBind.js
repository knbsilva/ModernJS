const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
console.log(pessoa.saudacao)

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

// bind2

function Pessoa(){
    this.idade = 0
    setInterval(function(){
        self.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}
new Pessoa
