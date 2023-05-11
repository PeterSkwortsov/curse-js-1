
const sites = {
    msk: {
        let: 200,
        temp: 50,
    },
    spb: {
        it: 100,
        temp: 5,
    }
}

let sumTemp = 0;
let citesCount = Object.keys(sites).length

for (const key of Object.keys(sites)) {
    sumTemp += sites[key].temp;
}
console.log(sumTemp)
console.log(sumTemp / citesCount)