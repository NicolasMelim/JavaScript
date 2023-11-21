const tempSp = [34, 32, 30, 24,]
const positivoSp = tempSp.every(valor => valor >= 0) //every só volta TRUE OU FALSE 
console.log(positivoSp)

const tempRJ = [34, 32, 30, 24, 19]
const positiveRJ = tempRJ.filter(function(valor){
    return valor >= 20
})
console.log(positiveRJ)