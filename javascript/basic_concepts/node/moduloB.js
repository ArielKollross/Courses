// exportando código
module.exports = {
    bomDia : 'Bom dia',
    boaNoite() {
        return 'Boa Noite'
    }
}

// esse codigo não pode ser acessado, pois nao foi exportado
function soma() {
    return 'nao foi exportada'
}