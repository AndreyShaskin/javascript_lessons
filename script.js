' use strict';

let money, time;

function start() {
   
    time  = prompt("Введите дату в формате YYYY-MM-DD");
   
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();

var appData = {
   budjet : money,
   timeData : time,
   expenses : {},
   optionalExpenses :  {},
   income :[],
   savings : true
};

function chooseEpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", '');
        let b = prompt("Во сколько обойдется?", '');
    
        if ( (typeof(a)) === 'string' 
          && (typeof(a)) != null 
          && (typeof(b)) != null 
          && a != '' 
          && b != '' 
          && a.length < 50 ) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
}

chooseEpenses();

appData.moneyPerDay = + (appData.budjet / 30).toFixed(2);

alert("Бюджет на 1 день: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Денег нет но мы держимся");
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
    console.log("Выживаем");
} else if (appData.moneyPerDay > 2000) {
    console.log("Жить можно");
} else {
    console.log("Ты ввел какую-то х..ю!");
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?",''),
            percent = +prompt("Под какой процент?",'');

        appData.monthIncome = save / 100 / 12 * percent;

        alert("Доход с депозита: " + appData.monthIncome / 12);
    }
}

checkSavings();
