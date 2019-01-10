const pluralize = require("./pluralize.js");
let counter = 1;
const notifier = require('node-notifier');
const minutes = ['минута', 'минуты', 'минут'];

function startingTimer() {
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