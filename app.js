'use strict'

function removePassvord (reset) {
    if (reset) {
        this.password = undefined;
    } else {
        this.password = '1';
    }
} 

const user = {
    login: 'asd@sd.ru',
    password: 12345
};

const resetUserParol = removePassvord.bind(user, true);
resetUserParol()
console.log(user)