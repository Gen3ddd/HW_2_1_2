//formula looks like: value1 + value2 / 5 + 17;

const value1 = 150;
let value2 = Math.floor(Math.random() * 1000);
let result = value1 + value2 / 5 + 17;

/* 
Расчет по формуле: value1 + value2 / 5 + 17
Операторы в JavaScript имеют разные приоритеты, аналогично математическим операциям. 
В данном случае, деление ("/") будет выполнено раньше, чем сложение ("+").
Таким образом, сначала будет выполнено value2 / 5, затем результат будет добавлен к value1, 
а затем к получившемуся результату будет добавлено 17.
*/

console.log(`value1: ${value1}, value2: ${value2}, result: ${result}`);
