
function criarLoja  (fundador, localizacao, numero){
    const lojaDeRpupa = {
        lojaFundador: fundador,
        lojaLocalizacao: localizacao,
        lojaNumero: numero,

        printLoja: function(){
            console.log('Imprimindo!')
        }
        
    }
    return lojaDeRpupa
}
const loja1 = criarLoja('Nicolas', ' Engenheiro', 32)
const loja2 = criarLoja('Gabrielle', 'R. Joaquim', 147)
loja1.cor = 'Verde'
console.log(loja1)
console.log(loja2)