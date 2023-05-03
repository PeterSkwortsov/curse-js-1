
let transactionUSD = [10, -7, 50, -10, 100];
// let transactionRUB = [];

    // for (let transaction of transactionUSD) {
    //     transactionRUB.push(transaction * 60)
    // }

    // console.log(transactionUSD)
    // console.log(transactionRUB)

    const transactionRUB2 = transactionUSD.map((transaction, i) => {
        return transaction *60
    })
    console.log(transactionRUB2)

