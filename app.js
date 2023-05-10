/* Реализовать методы увеличения и уменьшения баланса,
при котором каждая операция сохраняется в массив
operations в виде { reason: 'Оплата налогов', sum: -100 }.
Возвращается true, если успешно и false, если не зватает баланса.
Также реализовать метод вывода числа операций по кошельку
*/

const wallet = {
balance: 0,
operations: [],
increase: function (reason, sum) {
    this.balance += sum;
    this.operations.push({
        reason: reason,
        sum: sum
    })
    return true
},
decrease: function (reason, sum) {
    if (this.balance < sum) {
        console.log('недостаточно баланса');
        this.operations.push({
            reason: reason,
            sum: -sum
        })
        return false;
    }
    this.balance -= sum;
    return true
    },

    getOperationLenhth: function () {
        return this.operations.length;
    }
};

console.log(wallet.increase('Зарплата', 1000))
console.log(wallet.getOperationLenhth())
console.log(wallet.decrease('Зарплата', 2400))
console.log(wallet.getOperationLenhth())
console.log(wallet.decrease('Зарплата', 500))
console.log(wallet.balance)
console.log(wallet.operations)

