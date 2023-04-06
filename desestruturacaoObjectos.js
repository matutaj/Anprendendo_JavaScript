
const pessoa = {
    nome:"Jorge",
    sobreNome:"António",
    idedade:10,
    endereco:{
        rua:"Av Luanda",
        numero:125
    }
}

//Atribuição via desestruturação
const {nome, sobreNome, idedade} = pessoa;

const{endereco:{rua, numero}} = pessoa;

console.log("Nome:", nome, sobreNome, ", Rua:", rua)