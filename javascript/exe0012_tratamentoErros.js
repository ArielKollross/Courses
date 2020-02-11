function tratarErrorLancer(erro){
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date()
    }
}

function imprimirNomeGritando(obj) {
    try{
        console.log(obj.name.toUpperCase() + "!!!")
    } catch(e){
        tratarErrorLancer(e)
    } finally{
        console.log('final')
    }
}

const obj = {nome: 'Roberto'} //erro proposital nesta linha
imprimirNomeGritando(obj)