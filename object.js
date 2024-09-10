/*let Tenis ={
    tipo:"Tenis de corrida",
    cardaco:"G",
    estoque:false,
    tamanho:{
        palmilha:39,
        tenis:40,

        caixa:{
            largura:35,
            altura:40,
            profundidade: 10
        },
    },
    marcaArrayValores:[ "Nike", "Adidas"],
    marcaArrayObject:[
        {
            nome:"Nike",
        },
        {
            nome:"Adidas"
        },
    ],

    getMarcaArrayObject:function (param){
        return this.marcaArrayObject[param].nome;
    },
    getMarcaArrayValores:function (param){
        return this.marcaArrayValores[param]
    }
}
console.log(Tenis)
*/

function Tenis(tamanho, preco){
    return {
        tamanho,
        preco,
    }
}
console.log(Tenis(23, 120.0, ))