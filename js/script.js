'use strict';

const num = +prompt('Введите Ваше число');
const exp = +prompt('Введите степень, в которую хотите возвести число');

const exponentiation = (num,exp = 1) => {
    if (typeof (num) !== 'number' || typeof(exp) !== 'number'  || isNaN(num) || isNaN(exp)) return 'some error';
    return num**exp;
}

const result = exponentiation(num,exp);
alert(result);