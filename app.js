
// Задание: проверить является ли это номером телефона России
/* верные */
const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 323-53-56';
const num5 = ' +7(910) 323-53-56 ';

/* не верные */
const num1Error = '89103235';
const num2Error = '+7d910d323-53-56';
const num3Error = '9+7103235356';
const num4Error = '89103g35356'; 

function isPhoneNomber(num) {
    num = num.trim(); // убрать пробелы
    num = num.replace('+7', '8');
    if (!num.startsWith('8')) {
        return false
    }
    num = num.replaceAll('(', '');
    num = num.replaceAll(')', '');
    num = num.replaceAll(' ', '');
    num = num.replaceAll('-', '');
    if (num.length != 11) {
        return false
    }
    let onlyNum = true 
    for (const char of num) {
        if (isNaN(Number(char))) {
            onlyNum = false;
            break;
        }
    }

    return onlyNum
}

console.log(isPhoneNomber(num1))
console.log(isPhoneNomber(num2))
console.log(isPhoneNomber(num3))
console.log(isPhoneNomber(num4))
console.log(isPhoneNomber(num5))

console.log(isPhoneNomber(num1Error));
console.log(isPhoneNomber(num2Error));
console.log(isPhoneNomber(num3Error));
console.log(isPhoneNomber(num4Error));
console.log(isPhoneNomber(num5Error));
