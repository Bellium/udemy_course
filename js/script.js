// let numberOfFilms;
//
// function start() {
//     numberOfFilms = +prompt('How many films are u watched?', '').trim();
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('How many films are u watched?', '').trim();
//     }
// }
// start();
//
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
//
//
// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('One of the last viewed films?', '').trim(),
//               b = prompt('How rate u give for this film?', '').trim();
//         if ((a && b !== '') && (a && b !== null) && (a.length && b.length < 50)) {
//             personalMovieDB.movies[a] = b;
//         } else i--;
//     }
// }
// rememberMyFilms();
//
// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Viewed a few films');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('You are casual viewer');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('You are a cinephile!');
//     }
// }
// detectPersonalLevel();
//
// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat);
// //One more way
// // function showMyDB() {
// //     if (personalMovieDB.privat === false) {
// //         console.log(personalMovieDB);
// //     }
// // }
// // showMyDB();
//
// function writeYourGenres() {
//     let answer;
//     for (let i = 0; i < 3; i++) {
//         answer = prompt(`Your favorite genre number ${i + 1}?`).trim();
//         if (answer !== null && answer !== '') {
//             personalMovieDB.genres.push(answer);
//         } else i--;
//
//         // personalMovieDB.genres[i] = answer;
//         // personalMovieDB.genres[i] = prompt(`Your favorite genre number ${i + 1}?`);
//     }
// }
// writeYourGenres();



// Some exercise:
// function getMathResult(num, base) {
//     let result = '';
//     if (typeof(base) !== 'number' || base === 0 || base < 0) {
//         return num;
//     }
//     for (let i = 1; i <= base; i++) {
//         if (i < base) {
//             result += `${num * i}---`;
//         } else {
//             result += `${num * i}`;
//         }
//     }
//     return result;
// }
// console.log(getMathResult(5, 3));
//
// function starPyramidBuilding() {
//     let result = '';
//     const length = 7;
//
//     for (let i = 1; i < length; i++) {
//         for (let j = 0; j < i; j++) {
//             result += '*';
//         }
//         result += '\n';
//     }
//     return result;
// }
// console.log(starPyramidBuilding());
//
// //Incorrect
// function doubleStarPyramidBuilding() {
//     const lines = 6;
//     let result = '';
//     let emptySpace = ' '
// // Проверяется именно переменная result, формируйте строку в ней
//     for (let i = 1; i <= lines ; i++) {
//         for (let j = 0; j < i + 2 ; j++) {
//             if (result == lines) {
//                 result = result - lines + '*';
//             }
//             result += '*';
//         }
//         result += '\n';
//     }
//     return result;
// }
// console.log(doubleStarPyramidBuilding());
//
// function calculateVolumeAndArea(num) {
//     if (typeof(num) === 'string' || num === null || Math.sign(num) !== 1 || Number.isInteger(num) !== true) {
//         return 'Error occurred';
//     } else {
//         let volume = Math.pow(num, 3),
//             area = 6 * Math.pow(num, 2);
//         // console.log(`Volume = ${volume}, area = ${area}`);
//         return `Обьем куба: ${volume} площадь всей поверхности: ${area}`.toString();
//     }
// }
// console.log(calculateVolumeAndArea(5));
//
// function getCoupeNumber(place) {
//     if (place === 0 || place >= 37) {
//         return 'There are no such places';
//     }
//     if (typeof(place) === 'string' || place === null || Math.sign(place) !== 1 || Number.isInteger(place) !== true) {
//         return 'Incorrect place';
//     }
//     else {
//         place = Math.ceil(place/4);
//         // row = Math.pow(place, 1/2);
//         // coupe = Math.floor(row);
//         // return `Your row is number ${coupe}`;
//         return place;
//     }
// }
// console.log((getCoupeNumber(36)));
//
// function getTimeFromMinutes(minutes) {
//     if (typeof(minutes) !== 'number' || Number.isInteger(minutes) !== true || minutes < 0) {
//         return 'Incorrect time';
//     }
//     let min = minutes % 60;
//     let hours = Math.trunc(minutes / 60);
//     // Original (english version)
//     if (hours <= 1) {
//         return `This is ${hours} hour and ${min} minutes`;
//     } else {
//         return `This is ${hours} hours and ${min} minutes`;
//     }
//     //Russian version
//     // if (hours === 0) {
//     //     return `Это ${hours} часов и ${min} минут`;
//     // }
//     // if (hours === 1) {
//     //     return `Это ${hours} час и ${min} минут`;
//     // }
//     // if (hours > 1 || hours < 5) {
//     //     return `Это ${hours} часа и ${min} минут`;
//     // }
//     // if(hours > 5) {
//     //     return `Это ${hours} часов и ${min} минут`;
//     // }
// }
// console.log(getTimeFromMinutes(210));
//
// function findMaxNumber(...arguments) {
//     if (arguments.some((i) => Number.isNaN(i) || typeof(i) !== 'number')) {
//         return 0;
//     } else return Math.max(...arguments);
//
//     // if (array.find((i) => Number.isNaN(i) || typeof(i) !== 'number')) {
//     //     return 0
//     // } else return Math.max(...array);
//     //
//     // if (array.find((i) => typeof(i) === 'number' && Number.isNaN(i)) !== true && array.length >= 4) {
//     //     return Math.max(...array);
//     // } else return 0;
//     //
//     //
//     // if (isNaN(array.find(i => isNaN(i) || typeof(i) === 'object'))) {
//     //     return 0
//     // }
//     // if (array.find((item) => typeof(item) === 'string' || array.length < 4)) {
//     //     return 0;
//     // } else ;
// }
// console.log(findMaxNumber(4, 5.5, 6, []));
//
// function fibonacciNumber(num) {
//     let result = [];
//     if (typeof(num) !== 'number' || Number.isInteger(num) !== true) {
//         return '';
//     }
//     for (let i = 0; i < num; i++ ) {
//         result[i] = i;
//         if (i > 1) {
//             result[i] = result[i - 1] + result[i - 2];
//         }
//     }
//     return result.join(' ');
// }
// console.log(fibonacciNumber(15));

//Fibonacci another way (without array)
// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return "";
//     }
//
//     let result = '';
//     let first = 0;
//     let second = 1;
//
//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//             // Без пробела в конце
//         } else {
//             result += `${first} `;
//         }
//
//         let third = first + second;
//         first = second;
//         second = third;
//     }
//
//     return result;
// }
//
// fib(5)

//Callback                       функция как аргумент
// function testCallback(string, callbackFunction) {
//     const a = prompt(string, '');
//     //Проверку конечно лучше сделать здесь, а не отдельной функцией
//     //Но для примера подойдёт
//
//     //     Функция вызывается
//     return callbackFunction(a);
// }
// //Функция передаётся аргументом (т.е без скобочек), а потом уже выхывается внутри другой - callback
// console.log(testCallback('Enter something', someFunctionsForTest));
// function someFunctionsForTest(str) {
//     if (str !== null && str !== '') {
//         return str;
//     } else return testCallback('Enter something', someFunctionsForTest);
// }

//Object
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'red',
//         bg: 'black'
//     },
//     makeTest: function () {
//         console.log('test');
//     }
// };
// options.makeTest();
//
// //Деструктуризация обьектов:
// const {border, bg} =  options.colors;
// //Теперь это отдельные переменные
// console.log(border);
//
// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             counter++;
//         }
//     } else counter++;
// }
// console.log(counter);
//
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Property ${i} is ${options[key][i]}`);
//         }
//     } else console.log(`Property ${key} is ${options[key]}`);
// }

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            C: '0',
            Docker: '0'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (plan) {
        const {languages} = personalPlanPeter.skills;
        const {age} = personalPlanPeter;
        if (languages.length === 0) {
            return 0;
        }
        let result = languages.join(' ').toUpperCase();
        return `Мне ${age} и я владею языками: ${result}`;
    }
};
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {
    const {exp} = plan.skills;
    return `${exp}`;
}
showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    let result = '';
    const {programmingLangs} = plan.skills;
    if (Object.keys(programmingLangs).length === 0) {
        return result;
    }
    for (let key in programmingLangs) {
        result += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return result;
}

console.log(showProgrammingLangs(personalPlanPeter));


