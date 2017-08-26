/* ====================== alex ======================== */
console.log('Внешний скрипт подключен!');
/* comment */


function countNum (num1) {
	var num1;
	num1 = prompt('Введи число', '');
	var res = 100 - num1;
	return res;
}

/* ====================== max ======================== */
var object = {

};
object.name = "Вася";
object.surname = "Петров";
object.name = "Сергей";
delete object.name;
alert(object.name);

