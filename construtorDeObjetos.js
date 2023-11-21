function CriarLoja  (fundador, localizacao, numero){
    
    this.lojaFundador = fundador;
    this.lojaLocalizacao = localizacao;
    this.lojaNumero = numero;
   
}
    
    

const loja1 = new CriarLoja('Nicolas', ' Engenheiro', 32)
console.log(loja1)
