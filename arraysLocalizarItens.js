const moves = [ 
    {id: 1, movieName: 'Velozes E furiosos 3'},
    {id: 2, movieName: 'A Baleia'},
    {id: 3, movieName: 'Harry Potter e o Calice de Fogo'}
 ]
 console.log(moves.find(function(move){
    return move.movieName == 'A Baleia'
 }))

 console.log(moves.find(move => move.movieName == 'Harry Potter e o Calice de Fogo')) //Utilizei uma Arrow Function: =>