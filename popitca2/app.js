
'use strict'

const res = []
for (let i = 10; i <= 30; i += 10) {
  for (let j = 1; j <= 3; j++) {
    res.push(i + j);
  }
}
console.log(res.join(' '))




