'use strict'

 // переменная, в которой хранится выбранное математическое действие
let op; 

// функция расчёта
  function func() {
     // переменная для результата
let result;
   // получаем первое и второе число
// получаем первое и второе число
let num1_str = String(document.getElementById("num1").value);
let num2_str = String(document.getElementById("num2").value);

// проверяем, не пустая ли первая строка
if ((num1_str.length == 0) || (num1_str.indexOf(' ') != -1)) {
	// если пустая — пишем сообщение
	document.getElementById("result").innerHTML = 'Первое число не указано';
	// и выходим из функции
	return;
}

// проверяем, не пустая ли вторая строка
if ((num2_str.length == 0) || (num2_str.indexOf(' ') != -1)) {
	// если пустая — пишем сообщение
	document.getElementById("result").innerHTML = 'Второе число не указано';
	// и выходим из функции
	return;
}



// проверяем, получилось ли число из первой строки или нет
if (isNaN(num1)) {
	// если не получилось — пишем сообщение
	document.getElementById("result").innerHTML = 'Некорректный ввод чисел';
	// и выходим из функции
	return;
}

// проверяем, получилось ли число из второй строки или нет
if (isNaN(num2)) {
	// если не получилось — пишем сообщение
	document.getElementById("result").innerHTML = 'Некорректный ввод чисел';
	// и выходим из функции
	return;
} 

// проверяем второе число при делении
if ((num2 == 0) && (op == '/')) {
	// если не получилось — пишем сообщение
	document.getElementById("result").innerHTML = 'На ноль делить нельзя';
	// и выходим из функции
	return;
}
 // смотрим, что было в переменной с действием, и действуем исходя из этого
switch (op) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default: result = 'Выберите действие'
  }

   // отправляем результат на страницу
   document.getElementById("result").innerHTML = result;
 }