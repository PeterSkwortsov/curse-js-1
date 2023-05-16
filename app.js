'use strict'
/* Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.

 */


let arr = [-1 ,-2 ,-3 ,-4 ,-5 , 1 ,  2 , 3 , 4 , 5];
let res = arr.filter((el) => el < 0).length;
console.log(res)