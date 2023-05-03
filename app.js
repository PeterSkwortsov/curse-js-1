/*Добавляем элементы в массив */

const operationS = [12, -5, 44, -23, 34, 2];
const positiveOperations = [];
    for(let operation of operationS) {
        if (operation > 0) {
            positiveOperations.push(operation);
        }
    }
    console.log(positiveOperations)


/*Фильтруем элименты через метод - фильтр */
const positiveOperationsS = operationS.filter(operation => {
    return operation < 1
})
console.log(positiveOperationsS)


/*Фильтруем и производим действие с элементом */
const positiveRUBOperations = operationS
    .filter(operation => {
    return operation > 0
    })
    .map(operation => operation * 60)
console.log(positiveRUBOperations)