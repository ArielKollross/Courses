 let aprovados = new Array('Alice', 'Bob')
 console.log(aprovados)

//cirando array de forma literal, mais usual
 aprovados2 = ['Bob', 'Alice']
 console.log(aprovados2)

 //adicionado elementos
 aprovados2[3] = 'Batman'
 aprovados2.push('Iron Man')
 console.log(aprovados2.length)
 aprovados2[11] = ('Homem das Aranhas')

 console.log(aprovados2)

 aprovados2.sort() //ordenar array, alterando o array origunal
 console.log(aprovados2)

 delete aprovados2[0]
 console.log(aprovados2)

 const carros = ['Ecplise', 'Lamburguine', 'Maverik']
 carros.splice(1, 1) // (indice, elemtos a serem excluidos)
 console.log(carros)
 // (indice, excluir n elementos a partir do indice, add elemmento 1,2,...n )
 carros.splice(0, 0, 'Skyline', 'MX5')
 console.log(carros)