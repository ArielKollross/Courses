const funcs = []
const funcs2 = []

for(var i =0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

for(let j =0; j<10; j++){
    funcs2.push(function(){
        console.log(j)
    })
}

funcs[2]()
funcs2[2]()