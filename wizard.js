// require("dotenv").config();
const fetch = require('node-fetch');
const { Telegraf, Composer, Stage, Markup, Scenes, session } = require('telegraf');
const commandParts = require("./lib/commandParts");
const { randomAnimal } = require("./lib/animalPhoto");
const {WizardScene} = require("telegraf/scenes");
const { setTimeout } = require("timers/promises");
const GPT_COMMANDS = require("./const/gpt-bot-commands");

const bot = new Telegraf("BOT_TOKEN");

function checkCmd(ctx) {
    if (!ctx.message || !ctx.message.text || ctx.message.text == '/start' || ctx.message.text == '/help') {
        ctx.reply('(Базовые команды отключены)')
        return false;
    }
    return true;
}
function checkM(ctx) {
    if (!ctx.message || !ctx.message.text || ctx.message == undefined) {
        return false;
    }
    return true;
}

const letterWizard = new WizardScene('letter',
    (ctx) => {
        // checkCmd(ctx);
        const r = checkM(ctx);
        if (r === false) {
            return;
        }
        ctx.reply('Предлагаю решить 10 задач: за 2 сложные даю по 2 балла, за 8 простых – по одному. Правила очень простые. Удачи!')
        setTimeout(200).then(() => {
            ctx.reply('Для начала напиши "start"');
            return ctx.wizard.next();
        });
    },
    (ctx) => {
        const r = checkM(ctx);
        if (r === false) {
            return ctx.scene.leave();
        }
        const d = checkCmd(ctx);
        if (d === false) {
            return ctx.reply('-_-');
        }
        if (ctx.message.text !== 'start') {
            return ctx.reply('Неверное ' + ctx.message.text + ' -- напиши "start"')
        }
        ctx.reply('Отлично, начинаем!')
        ctx.session.cnt = 0;
        setTimeout(200).then(() => {
            ctx.reply('Задача 1 из 10\n' +
                '\n' +
                'При сложении нескольких чисел джун допустил следующие ошибки: \n' +
                'цифру единиц "2" он принял за "9" и цифру десятков "4" принял за "7". В сумме получилось 750. \n' +
                'Рассчитай верную сумму.')
            return ctx.wizard.next();
        });
    },
    (ctx) => {
                const r = checkM(ctx);
        if (r === false) {
            return ctx.scene.leave();
        }
                const d = checkCmd(ctx);
        if (d === false) {
            return ctx.reply('-_-');
        }
        if (ctx.message.text == "713") {
            ctx.reply('Верно')
            ctx.session.cnt++;
        } else {
            ctx.reply('Неверно')
        }
        setTimeout(200).then(() => {
            ctx.reply('Задача 2 из 10\n' +
                '\n' +
                'Разработчик Вася решил сменить работу, потому что его не устраивала зарплата. На собеседовании Вася запросил 185 000 рублей, что на 25% больше текущей зарплаты. \n' +
                'Сколько Вася получает сейчас?');
            return ctx.wizard.next();
        })
    },
    (ctx) => {
                const r = checkM(ctx);
        if (r === false) {
            return ctx.scene.leave();
        }
                const d = checkCmd(ctx);
        if (d === false) {
            return ctx.reply('-_-');
        }
        if (ctx.message.text == "138750") {
            ctx.reply('Верно')
            ctx.session.cnt++;
        } else {
            ctx.reply('Неверно')
        }
        setTimeout(200).then(() => {
            ctx.reply('Задача 3 из 10\n' +
                '\n' +
                'Записать число 16 с помощью четырех пятерок (5), используя арифметические знаки (+,-,*,/).\n' +
                'Введи ответ без пробелов, например: 777-77*7+7/777');
            return ctx.wizard.next();
        })
    },
    (ctx) => {
                const r = checkM(ctx);
        if (r === false) {
            return ctx.scene.leave();
        }
                const d = checkCmd(ctx);
        if (d === false) {
            return ctx.reply('-_-');
        }
        if (ctx.message.text == "55/5+5") {
            ctx.reply('Верно')
            ctx.session.cnt++;
        } else {
            ctx.reply('Неверно')
        }
        setTimeout(200).then(() => {
            ctx.reply('Задача 4 из 10\n' +
                '\n' +
                'В спринт попало 17 задач. Миша выполнил в 2 раза больше, чем Маша, а Петя больше Маши, но меньше Миши. \n' +
                'Сколько задач выполнил Петя?');
            return ctx.wizard.next();
        })
    },
    (ctx) => {
                const r = checkM(ctx);
        if (r === false) {
            return ctx.scene.leave();
        }
                const d = checkCmd(ctx);
        if (d === false) {
            return ctx.reply('-_-');
        }
        if (ctx.message.text == "5") {
            ctx.reply('Верно')
            ctx.session.cnt++;
        } else {
            ctx.reply('Неверно')
        }
        setTimeout(200).then(() => {
            ctx.reply('Задача 5 из 10\n' +
                '\n' +
                'Подрядчик на аутсорсе оценил верстку девяти одинаковых таблиц на сайте меньше чем в 1000 человеко-часов, а верстку десяти абсолютно таких же таблиц более чем в 1100 человеко-часов.  Есть инсайдерская информация, что верстка одной таблицы занимает целое количество часов. \n' +
                'Во сколько часов подрядчик оценил верстку одной такой таблицы? В ответе введи только число.');
            return ctx.wizard.next();
        })
    },
    (ctx) => {
                const r = checkM(ctx);
        if (r === false) {
            return ctx.scene.leave();
        }
                const d = checkCmd(ctx);
        if (d === false) {
            return ctx.reply('-_-');
        }
        if (ctx.message.text == "111") {
            ctx.reply('Верно')
            ctx.session.cnt++;
        } else {
            ctx.reply('Неверно')
        }
        setTimeout(200).then(() => {
            ctx.reply('Задача 6 из 10\n' +
                '\n' +
                'Полтора рекрутера за полтора месяца находят полтора синиора. Сколько синиоров найдут 9 рекрутеров за 9 месяцев?\n' +
                'В ответе введи только число.');
            return ctx.wizard.next();
        })
    },
    (ctx) => {
                const r = checkM(ctx);
        if (r === false) {
            return ctx.scene.leave();
        }
                const d = checkCmd(ctx);
        if (d === false) {
            return ctx.reply('-_-');
        }
        if (ctx.message.text == "54") {
            ctx.reply('Верно')
            ctx.session.cnt++;
        } else {
            ctx.reply('Неверно')
        }
        setTimeout(200).then(() => {
            ctx.reply('Задача 7 из 10\n' +
                '\n' +
                'Разработчик начал работать в компании на аутсорсе. Он хотел получать 1 000 рублей в час, но руководитель сомневался в компетенциях и предложил такую схему:\n' +
                '- За каждую задачу, которая выполнена в срок, ему платят 1 000 рублей;\n' +
                '- за каждую просроченную задачу из его заработка вычитают 1 500 рублей;\n' +
                '- выплата рассчитывается за каждые 30 задач.\n' +
                '\n' +
                'Разработчик выполнил 30 задач и попросил рассчитаться. Ему сказали, что ему ничего не должны — вся сумма ушла на штрафы. \n' +
                'Сколько задач разработчик просрочил? В ответе введи только число.');
            return ctx.wizard.next();
        })
    },
    (ctx) => {
                const r = checkM(ctx);
        if (r === false) {
            return ctx.scene.leave();
        }
                const d = checkCmd(ctx);
        if (d === false) {
            return ctx.reply('-_-');
        }
        if (ctx.message.text == "12") {
            ctx.reply('Верно')
            ctx.session.cnt++;
        } else {
            ctx.reply('Неверно')
        }
        setTimeout(200).then(() => {
            ctx.reply('Задача 8 из 10\n' +
                '\n' +
                'Карл и Клара работают в большой компании в одном бизнес-центре. Клара работает на 12 этажей выше. Однажды Карл решил подняться к Кларе для обсуждения задачи. Пройдя половину пути, он оказался на 8 этаже. \n' +
                'На каком этаже работает Клара?');
            return ctx.wizard.next();
        })
    },
    (ctx) => {
                const r = checkM(ctx);
        if (r === false) {
            return ctx.scene.leave();
        }
                const d = checkCmd(ctx);
        if (d === false) {
            return ctx.reply('-_-');
        }
        if (ctx.message.text == "14") {
            ctx.reply('Верно')
            ctx.session.cnt++;
        } else {
            ctx.reply('Неверно')
        }
        setTimeout(200).then(() => {
            ctx.reply('Задача 9 из 10\n' +
                '\n' +
                'У Бибы и Бобы в спринте стоят задачи. Каждая из них оценена в 1, 3, 5 или 7 часов. Суммарная оценка задач в спринте у Бибы и Бобы одинаковая. При этом у Бибы 1-часовых задач столько же, сколько у Бобы 3-часовых, 3-часовых — столько же, сколько у Бобы 5-часовых, 5-часовых — столько же, сколько у Бобы 7-часовых, а 7-часовых — столько же, сколько у Бобы 1-часовых.\n' +
                'Определи сколько у Бибы 7-часовых задач, если известно, что у каждого по 20 задач в спринте.');
            return ctx.wizard.next();
        })
    },
    (ctx) => {
                const r = checkM(ctx);
        if (r === false) {
            return ctx.scene.leave();
        }
                const d = checkCmd(ctx);
        if (d === false) {
            return ctx.reply('-_-');
        }
        if (ctx.message.text == "5") {
            ctx.reply('Верно')
            ctx.session.cnt += 2;
        } else {
            ctx.reply('Неверно')
        }
        setTimeout(200).then(() => {
            ctx.reply('Задача 10 из 10\n' +
                '\n' +
                'Четыре разработчика решают задачи вместе: один пишет код, а остальные три хором диктуют. Оказалось, что Раджеш диктовал код меньше всех остальных — в пяти задачах. А Махатма диктовал больше всех — в восьми задачах. \n' +
                'Сколько всего задач решили разработчики? В ответе введи только число.');
            return ctx.wizard.next();
        })
    },
    (ctx) => {
                const r = checkM(ctx);
        if (r === false) {
            return ctx.scene.leave();
        }
                const d = checkCmd(ctx);
        if (d === false) {
            return ctx.reply('-_-');
        }
        if (ctx.message.text == "9") {
            ctx.reply('Верно')
            ctx.session.cnt += 2;
        } else {
            ctx.reply('Неверно')
        }
        setTimeout(200).then(() => {
            ctx.session.text = ctx.message.text;
            ctx.session.letter = `Спасибо! Результат: ` + ctx.session.cnt + ` баллов.`;
            ctx.reply(ctx.session.letter);
            if (ctx.session.cnt >= 10) {
                ctx.reply('Потрясающе 🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️');
            }
            return ctx.scene.leave();
        })
    },
)

// Register the scenario with Telegraf
const stage = new Scenes.Stage([letterWizard]);
// stage.register(nameStep, titleStep, subjectStep, textStep);
bot.use(session());
bot.use(stage.middleware());
bot.telegram.setMyCommands([
    {
        command: "start",
        description: "Стартуем бота - ничего лишнего",
    },
]);

bot.start((ctx) => {
    try {
        ctx.reply(
            `Приветствую, ${
                ctx.from.first_name ? ctx.from.first_name : "хороший человек"
            }!`
        );
    } catch (e) {
        //
    }
    ctx.scene.enter('letter');
});

bot.launch();
