'use strict'
/* Даны числа, разделенные запятыми:


Найдите сумму этих чисел.
 */

let num = '12,34,56';

function add(string){ 
    return string.split(',').reduce(function(a,b){return +a+(+b); });  
}

console.log(add(num))