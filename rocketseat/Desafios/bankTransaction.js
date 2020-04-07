/* Crie um programa para realizar operações bancárias na conta de um usuário.
Adicionar transações

*/

const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};

function createTransaction(obj, type, valueTransaction) {
  obj.transactions.push({
    type: type,
    value: valueTransaction,
  })
}

function getUserBalance(obj) {
  const balance = []
  // Object.entries(obj.transactions).forEach(([key, val])=>{(val.type, val.value)})
  for (let i in obj.transactions) {
    let type = obj.transactions[i].type
    let value = obj.transactions[i].value

    type == "debit" ? value = -1 * value : false
    balance.push(value)
  }
  return balance
}

function calculationBalance(obj) {

  const balance = getUserBalance(user).reduce((el, base)=> el+base )

  return obj.balance = balance
}

function getHigherTransactionByType(typeTransaction){

  let amount = user.transactions[0].value
  let output

for(let i of user.transactions){
 // if(user.transactions[i].type == typeTransaction && user.transactions[i].value > amount ) {
    if(i.type == typeTransaction && i.value > amount ) {
      amount = i.value
      output = i
    }
  }
    return output
}

function getTransactionsCount() {
  const aux = {}
  let [countDebit, countCredit] = [0,0]

  for(i of user.transactions)
    (i.type == 'credit') ? countCredit++ : countDebit++

    aux.credit = countCredit
    aux.debit = countDebit

    return aux
}

 function getAverageTransactionValue() {
  let sum = 0

  for(i of user.transactions) {
      sum += i.value
  }
  return sum / user.transactions.length
}

createTransaction(user, "credit", 100)
createTransaction(user, "debit", 50)
createTransaction(user, "credit",1680)
createTransaction(user, "debit", 400)

getUserBalance(user)
calculationBalance(user)
console.log(getHigherTransactionByType('credit'))
console.log(getTransactionsCount())
console.log(getAverageTransactionValue())