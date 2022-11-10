'use strict'


//МЕТОДЫ СТРОК
//const str = 'строка'.toUpperCase();
//const str2 = 'СтРока'.toLowerCase();

//console.log('Строка'.includes('рок'));
//console.log('Строка'.startsWith('строка'));
//console.log('Строка'.endsWith('ок'));
//console.log('А роза упала на лапу Азора'.replace('A','a'));
//console.log('А роза упала на лапу Азора'.replaceALL('A','a'));

//const str = '    строка с пробелами по краям    ';
//console.log(str.trim());   убирает все пробелы в строке(начало и конец)

//const str = 'Привет';
//console.log(str[1]);


// || -ИЛИ
// && -И
// !- НЕ

//const num1 = 5;
//const num2 = 5;
//const num3 = 6;


//const result = num1 == num2;
//console.log(result);

//const result = num1 === num2;
//console.log(result);

//const result = num1 != num2; сравнение с отрицанием(сравниваются не типы)
//console.log(result);

//const result = num1 !== num2;   строгое сравнение с отрицанием
//console.log(result);

//console.log(num1 > num2);
//console.log(num1 < num2);
//console.log(num1 >= num2);
//console.log(num1 <= num2);

/*const num = 5;
const num2 = 10;

/*if (num >=5) {
   console.log('Число больше или равно 5')
} else {
    console.log();
}
*/

/*const age = 39;
const firstName = 'Pavel';
const lastName = 'Macivoda';

if( age > 18 && age < 40) {
    console.log('Ваш возраст от 18 до 40');
}

if(firstName === 'Pavel' || firstName === 'Pavel' && age > 18) {
    console.log('Условие выполнилось');
}
*/

/*const someVariable = 'Значение 2';

switch (someVariable) {
    case 'Значение 1': console.log('1'); break;
    case 'Значение 2': console.log('2'); break;
    case 'Значение 3': console.log('3'); break;
    default: console.log('default');
}
*/

/*switch (someVariable) {
    case 'Значение 1':{

   console.log('1') } ; break;
    case 'Значение 2': console.log('2'); break;
    case 'Значение 3': console.log('3'); break;
    default: console.log('default');
}
*/

const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
const button = document.getElementById('submit');

/*loginInput.addEventListener('input', (event) => {
  console.log(event.target.value)
});

passwordInput.addEventListener('input', (event) => {
    console.log(event.target.value)
  });
*/


button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(loginInput.value);
    console.log(passwordInput.value);

    if (loginInput.value === passwordInput.value) {
        console.log('значения совпадают');
    } else {
        console.log('значения не совпадают');
    }
});

