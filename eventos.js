// Atividade Online 2
// Criar sistema para cadastro em eventos com restrições de data do evento, capacidade e idade de participantes.

// Se a data do evento for maior que a data atual, permitir. Caso contrário, recusar cadastro.
let dataDoEvento = 21/02/2022

let dataAtual = 16/02/2022

if (dataDoEvento < dataAtual) {
    console.log("A data informada deverá ser maior que a data atual.")
} else {
    console.log("Data informada permitida para cadastro.")
}

// Se o participante for menor de idade, não permitir cadastro.
let idadeDoParticipante = 18

if (idadeDoParticipante < 18) {
    console.log("Não é permitida a participação de menores de idade no evento.")
} else {
    console.log("Idade mínima permitida para particpação no evento.")
}

//Listar participantes e palestrantes por evento. Não permitir cadastro acima de 100 participantes.
let listaDePalestrantes = ["Prof. Thiago", "Dr. Kléber", "Profª Marina"]

let listaDeParticipantes = ["Antônio", "Mayara", "Eduarda", "João", "Mário"]

console.log("-")
console.log(" RELAÇÃO DE PALESTRANTES ")
console.log(listaDePalestrantes)
console.log("-")
console.log(" RELAÇÃO DE PARTICIPANTES ")
console.log(listaDeParticipantes)
console.log("-")

if (listaDeParticipantes.length <= 100) {
    console.log("Cadastro efetuado com sucesso")
} else {
    console.log("Cadastro NÃO efetuado. Limite de participantes excedido.")
}