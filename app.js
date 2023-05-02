
const transactionUSD = [10, -7, 50, -10 ,100];

const transactionRUB = [];
for (const transaction of transactionUSD) {
transactionRUB.push(transaction * 60)
}

// console.log(transactionUSD)
// console.log(transactionRUB)

const transactionRUB2 = transactionUSD
.map((transaction, i) => {
    console.log(i)
    return transaction * 60; 
})

console.log(transactionUSD)
console.log(transactionRUB)