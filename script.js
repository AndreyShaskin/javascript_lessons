' use strict';
let money = + prompt("Ваш бюджет на месяц?");
let time = + prompt("Введите дату в формате YYYY-MM-DD");


let answer1 = prompt("Введите обязательную статью расходов в этом месяце");

let answer2 = prompt("Во сколько обойдется?");

var appData = {
   budjet : money,
   timeData : time,
   expenses : {
       question1 : answer1,
       question2 : answer2
   },
   optionalExpenses : "",
   income : "",
   savings : ""
};

alert("Бюджет на 1 день: " + money/30);

console.log(appData);