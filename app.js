
//тут мы складывем все значения массива

const operationS = [100, -20, 7, -30, 50];

const finalBalance1 = operationS.reduce((acc, operation, i) => {
    console.log(`Итерация: ${i}, acc: ${acc}, операция: ${operation}`)
    return acc += operation
}, 0);

console.log(finalBalance1)


//тут мы находим наименьшее значение массива

const finalBalance2 = operationS.reduce((acc, operation, i) => {
    console.log(`Итерация: ${i}, acc: ${acc}, операция: ${operation}`)
    if (operation > acc) {
        return acc;
     } else {
        return operation }
    
}, 0);

console.log(finalBalance2)