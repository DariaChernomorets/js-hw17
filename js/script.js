'use strict';

const num = +prompt('Введите Ваше число');
const exp = +prompt('Введите степень, в которую хотите возвести число');

const exponentiation = (num,exp = 1) => {
    if (isNaN(num) || isNaN(exp) || num === 0 || exp === 0 ) return 'some error';
    return num**exp;

}

const result = exponentiation(num,exp);
alert(result);