
function power (pow) {
    return function (num) {
        return num**pow;
    }
}

const powerOfTwo = power(2);
console.log(powerOfTwo(5))
console.log(powerOfTwo(10))

const powerOfThree = power(3);
console.log(powerOfThree(10))

console.log(`Пока не понимаю - ${power(5)(4)}`)