const users = [
  {
    name: "Salvio",
    revenue: [115.3, 48.7, 98.3, 14.5],
    outlay: [85.3, 13.5, 19.9]
  },
  {
    name: "Marcio",
    revenue: [24.6, 214.3, 45.3],
    outlay: [185.3, 12.1, 120.0]
  },
  {
    name: "Lucia",
    revenue: [9.8, 120.3, 340.2, 45.3],
    outlay: [450.2, 29.9]
  }
];

function userBalnceCalculation(array) {

  revenue = array.revenue.reduce((accumulator, baseValue) => {
    return accumulator + baseValue
  })

  outlay = array.outlay.reduce((accumulator, baseValue) => {
    return accumulator + baseValue
  })

  balance = revenue - outlay

  if(balance >= 0){
      console.log(`${array.name} possui saldo POSITIVO de R$: ${balance.toFixed(2)}`)
  }else{
      console.log(`${array.name} possui saldo NEGATIVO de R$: ${balance.toFixed(2)}`) 
  }
}

users.forEach(userBalnceCalculation)

