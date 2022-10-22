"use strict";

/* Задача про часы и минуты
function getTimeFromMinutes(time) {
    const hours = Math.trunc(time/60);
    const minutes = time % 60;
    let str = "";
    if (typeof (time) !== 'number' || time < 0 || !Number.isInteger(time)) {
        return "Ошибка, проверьте данные";
    } else {
        switch (hours) {
            case 0: 
                str = "часов";
                break;
            case 1: 
                str = "час";
                break;
            case 2:
            case 3:
            case 4: 
                str = "часа";
                break;
            case 5:
            case 6:
                str = "часов";
                break;
            default:
                str = "часов";
                break;
        }
    }
    return `Это ${hours} ${str} и ${minutes} минут`;
}
getTimeFromMinutes(0); */


/* Задача про вывод фигур из * */
/* const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result); */
/* function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
            // Без пробела в конце
        } else {
            result += `${first}`;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return console.log(result);
}

fib(6); */
/* const personalPlanPeter = {
    name: "Peter",
    age: "31",
    skills: {
        languages: ['ru', 'ua'],
        programmingLangs: {
            js: '',
            php: ''
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        let str = '';
        const {age} = plan;
        const {languages} = plan.skills;
        let lang = languages.join(' ').toUpperCase();
        str += `Мне ${age} и я владею языками: ${lang} `;
        console.log(str);
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter); */


const family = [];

function showFamily(arr) {
    let str = '';
    if (arr.length === 0) {
        str = 'Семья пуста';
        console.log(str);
    } else {
        for (let i = 0; i< arr.length; i++) {
            str += `${arr[i]} `;
        }
        console.log(`Семья состоит из ${str} `);
    }
}
showFamily(family);





function showFamily(arr) {
    arr.forEach(function(item, i, arr) {
        console.log(`Семья состоит из ${item}`);
    });

}