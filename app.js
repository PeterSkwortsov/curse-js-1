/*
Имеется массив изменения цен prices, где внутри
1й элемент массива является ценой в момент Х,
2й - ценой в момент Y.
Нужно преобразовать данные в массив, где будут отображены
только положительные изменения цен: [100, 150]
*/
const prices = [[100,200], [120,100], [200,350]];

const resuit = prices
    .map(product => product[1] - product[0])
    .filter(price => price > 0);
        console.log(resuit)



// /*Добавляем элементы в массив */

// const operationS = [12, -5, 44, -23, 34, 2];
// const positiveOperations = [];
//     for(let operation of operationS) {
//         if (operation > 0) {
//             positiveOperations.push(operation);
//         }
//     }
//     console.log(positiveOperations)


// /*Фильтруем элименты через метод - фильтр */

// const positiveOperationsS = operationS.filter(operation => {
//     return operation < 1
// })
// console.log(positiveOperationsS)


// /*Фильтруем и производим действие с элементом */

// const positiveRUBOperations = operationS
//     .filter(operation => {
//     return operation > 0
//     })
//     .map(operation => operation * 60)
// console.log(positiveRUBOperations)