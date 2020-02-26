const ebixirPares = (x,y) => {
    let arrPar = []
    for(let i = x; i <= y; i++){
        (i % 2 == 0 )? arrPar.push(i):0
    }
    console.log(arrPar)
}

ebixirPares(1,10)