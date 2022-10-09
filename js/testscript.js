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