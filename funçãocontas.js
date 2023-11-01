function desconto(preco){
    return preco = preco * 40 / 100
}
console.log(desconto(500))


function desconto2(status, total, desconto){
    console.log('Compra ' + status, '! O total da sua compra ficou de: $' + total, 'Voce tera um desconto de: $')
     return desconto = total * 30 /100
}
console.log(desconto2(' Aprovada', 600,))