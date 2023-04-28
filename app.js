/*
Есть выгрузка операций пользователя
const operations = [1000, -700, 300, -500, 10000];
а так же начальный баланс в 100$
Необходимо сделать функции расчета:
- Итогового баланса
- Наличия отрицательного баланса (если после очередной операции баланс < 0, то выдавать false)
- Расчета среднего расхода и среднего дохода
*/

const operation = [1000, -700, 300, -500, 10000];
const startMoney = 100;

function getBalance(arrayOfOperations, initalibalance) {
    let balance = initalibalance;
    for (const element of arrayOfOperations) {
            balance += element; 
    }
    return balance
}
console.log(getBalance(operation, startMoney))

function chekoperations(arrayOfOperations, initalibalance) {
    let balance = initalibalance;
    let isOk = true;
    for (const element of arrayOfOperations) {
            balance += element; 
            if (balance < 0) {
                isOk = false;
                break;
            }
        return isOk;
    }
}

console.log(chekoperations(operation, startMoney))

function avarigeOperations(arrayOfOperations) {
    let positivCount = 0;
    let negativCount = 0;
    let posityvSumm = 0;
    let negativeSumm = 0;
    for (const element of arrayOfOperations) {
        if (element > 0) {
            positivCount++;
            posityvSumm += element;
        }
        if (element < 0) {
            negativCount++;
            negativeSumm += element;
        }
    }
    return [posityvSumm / positivCount, negativeSumm / negativCount];
}

console.log(avarigeOperations(operation))
