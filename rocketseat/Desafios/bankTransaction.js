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

function userBalance(obj) {
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

  const balance = userBalance(user)
    .reduce((el, base)=> el+base )

  return obj.balance = balance
}

async function getHigherTransactionByType(typeTransaction){
  const stanbay = await user.transactions.length != 0
 
  let amount =  user.transactions[0].value //undefined while createTransaction not execute
  let output = {}

for(let i in user.transactions){
    if(user.transactions[i].type == typeTransaction){
      if(user.transactions[i].value > amount )
      user.transactions = amount
    }
  }
    return output[type,value] = typeTransaction, amount 
}

createTransaction(user, "credit", 100)
createTransaction(user, "debit", 50)
createTransaction(user, "credit",1680,)
createTransaction(user, "debit", 400)

userBalance(user)
calculationBalance(user)


console.log(getHigherTransactionByType('credit'))