/* Сделать объект склад с методами добавления на склад, поиску по складу товара и расчет веса */


const werehouse = {
    goods: [],
    findGoodById: function () {},
    addGood: function (good) {
        const existedGood = this.goods.find(g => g.id == good.id);
        this.goods.push(this.good)
        return;
    },
    getWeight: () {},
}

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
