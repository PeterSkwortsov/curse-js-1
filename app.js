'use strict'
/* Дан некоторый массив, например, вот такой:
[1, 2, 3, 4, 5, 6]
Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.
 */


let massive = [1, 2, 3, 4, 5, 6];
let result1 = 0;
let result2 = 0;

let mas1 = massive.slice(0,3)
    result1 = mas1.reduce(function(sum, elem) {
	return sum + elem;
}, 0);

console.log(result1);

let mas2 = massive.slice(3,6)
    result2 = mas2.reduce(function(sum, elem) {
	return sum + elem;
}, 0);
console.log(result2);

console.log(Math.round(result2 / result1));