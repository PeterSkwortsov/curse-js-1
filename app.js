//Дан массив со строками. 
//Оставьте в этом массиве только те строки, которые начинаются на http://.


var massive = ['Строка', 'Я не строка', 'www/help', 'http://', 'tttps'];

var tmpArr = [];
for (let i=0; i<massive.length; i++) {
  if (massive[i].match(/ht/)) {
    tmpArr.push(massive[i]);
  }
}

massive = tmpArr;
console.log(massive);


