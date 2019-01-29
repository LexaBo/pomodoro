const pluralize = require("./pluralize.js");
const notifier = require('node-notifier');

const minutes = ['минута', 'минуты', 'минут'];
let counter = 1;

function startingTimer() {
    const date = new Date();
    const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

    console.log(`Работа началась в ${hour}:${minute}`);

    notifier.notify({
        title: 'Работа 25 минут!',
        message: 'Одно дело за раз',
        icon: 'icons/icon_work.png',
        appID: ' ',
    });

    const interval = setInterval(function () {
        if (counter < 25) {
            console.log(`Прошло ${counter} ${pluralize(counter, minutes)}.`);
        }

        if (counter === 25) {
            notifier.notify({
                title: 'Перерыв 5 минут!',
                message: 'Встать со стула, размяться',
                icon: 'icons/icon_rest.png',
                appID: ' ',
            });
            console.log('Время работы закончилось.');
            clearInterval(interval);
        }

        counter++;

    }, 60000);
}

startingTimer();