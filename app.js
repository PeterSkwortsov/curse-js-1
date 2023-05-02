function add (a, b) {
return a + b 
}

function subtract (a, b) {
    return a - b
}

function power (a, b) {
    return a **5
}

// функция высшего порядка

function calculator (a, b, fn) {
    const res = fn(a, b);
    console.log(fn.name) 
    return res
    }

    let res = calculator (2, 5, add);
    console.log(res)

    res = calculator (2, 5, subtract);
    console.log(res)

    res = calculator (2, 5, power);
    console.log(res)