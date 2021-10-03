let readlineSync = require ('readline-sync')
var nomeEvento
let participantes = []
let idade = []
let capacidade = 2

nomeEvento = readlineSync.question("Informe o nome do evento: ")

if(nomeEvento.length > 3){
    console.log("continue o cadastro")

    for (let index = 0; index < capacidade; index++) {
        participantes[index] = readlineSync.question("Digite o nome do participante "+(index+1)+": ")
        idade[index] = readlineSync.question("Digite a idade do participante "+(index+1)+": ")
        
    }

    for (let index = 0; index < capacidade; index++) {
        console.log("O participante "+participantes[index]+" tem "+idade[index]+" anos de idade")
        if (idade[index] < 18) {
            console.log("Participante não cadastrado! A idade mínima é de 18 anos!")

        } else {
            console.log("Participante cadastrado!")
            
        }
    }

} else {console.log("Evento não cadastrado! O nome contém menos de três caractéres!")

}