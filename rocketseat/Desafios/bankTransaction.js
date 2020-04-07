/* Crie um programa para realizar operações bancárias na conta de um usuário.
Adicionar transações

-Crie uma função createTransaction para adicionar uma nova transação no 
obj de transações de um usuário, essa função deve receber como parâmetro um 
objeto de transação que tem o seguinte formato:{
  type: 'credit',
  value: 50.5
}
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
    //console.log(type, value)
    balance.push(value)
  }
  return balance
}

function calculationBalance(obj) {

  const balance = getUserBalance(user).reduce((el, base)=> el+base )

  return obj.balance = balance
}

function getHigherTransactionByType(typeTransaction){

  let amount = 0//user.transactions[0].value //undefined while createTransaction not execute
  let output = {}

for(let i of user.transactions){
 // if(user.transactions[i].type == typeTransaction && user.transactions[i].value > amount ) {
    if(i.type == typeTransaction && i.value > amount ) {
      amount = i.value
    }
  }
    return output.value = amount
}

createTransaction(user, "credit", 100)
createTransaction(user, "debit", 50)
createTransaction(user, "credit",1680)
createTransaction(user, "debit", 400)

getUserBalance(user)
calculationBalance(user)
console.log(getHigherTransactionByType('credit'))