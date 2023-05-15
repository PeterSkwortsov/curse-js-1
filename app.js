
// Заполните массив случайными числами из промежутка от 1 до 100.


let randomArr = [];
for (let i = 0; i < 10; i++) {  
    randomArr.push(Math.floor(Math.random() * 100));
}

console.log(randomArr)


