'use strict'

const audi = {
    make: 'Audo',
    model: 'A3',
    year: 2023,
    dameges: [],
    addDemeges (part, rate) {
        console.log(`У авто ${this.model} ${this.make} ${this.year} добавлено повереждение: 
        ${part} со степенью ${rate}`)
        this.dameges.push({
            part,
            rate
        })
    }
}

audi.addDemeges ('капот', 2)

