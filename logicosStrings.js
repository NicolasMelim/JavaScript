let corCliente = 'Prata'
let corEstoque = 'Laranja'
let corVendida = corCliente || corEstoque
console.log(corVendida)

//Ele retornou prata pois no cor cliente há uma cor definida, se não houvesse uma cor defenida ele mostraria Laranja:
// EXEMPLO:
let corCliente1 = undefined
let corEstoque1 = 'Laranja'
let corVendida1 = corCliente1 || corEstoque1
console.log(corVendida1)