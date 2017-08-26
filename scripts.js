/* ====================== alex ======================== */
console.log('Внешний скрипт подключен!');
/* comment */


function countNum (num1) {
	var num1;
	num1 = prompt('Введи число', '');
	var res = 100 - num1;
	return res;
}

var dog = {};
dog.name = 'Good boy';
dog.age = 3;
dog.dick_length = 20;
console.log("My dog's name is: " + dog.name + ", and it " + dog.age + " years old.");
console.log("He has " + dog.dick_length + "cm dick");
delete dog.dick_length;
console.log("Aaaaaannnndddd now he hasn't : " + dog.dick_length);
/* ====================== max ======================== */
var object = {

};
object.name = "Вася";
object.surname = "Петров";
object.name = "Сергей";
delete object.name;
console.log("And then in the darkness of the night Max shouted: " + object.name);

