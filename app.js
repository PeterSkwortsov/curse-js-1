/* Сделать объект склад с методами добавления на склад, поиску по складу товара и расчет веса */


const werehouse = {
    goods: [],
    findGoodById: function () {
        return this.goods.find(g => g.id == id)
       
    },
    addGood: function (good) {
        const existedGood = this.findGoodById(good.id)
        if (existedGood) {
            console.log('Этот товар уже есть на складе')
        }
        this.goods.push(this.good)
        return;
    },
    getWeight: function() {
        return this.goods.reduce((acc, el) => 
            acc += el.weight?.kg ? el.weight.kg : 0,
         0)
    }
};


// товары 

const car = {
    id: 1,
    weight: {
        kg: 1000
    },
    brand: 'Ford'
};

const chair = {
    id: 2,
    weight: {
        kg: 2
    },
}

const paper = {
    id: 3,
    color: 'red'
}


werehouse.addGood(car);
console.log(werehouse.goods);
werehouse.addGood(car);