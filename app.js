

const arr = [1, 4, 4, 10]
    
function some(arr, element) {
    const res = arr.find( el => el === element) 
        return res == undefined ? false : true
    }
console.log(some(arr, 10))

// или 

console.log(arr.some(el => el === 10))

