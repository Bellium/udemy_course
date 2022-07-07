// let numberOfFilms;
//
// function start() {
//     numberOfFilms = +prompt('How many films are u watched?', '')
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('How many films are u watched?', '')
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
//         const a = prompt('One of the last viewed films?', ''),
//               b = prompt('How rate u give for this film?', '');
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
// // function showMyDB() {
// //     if (personalMovieDB.privat === false) {
// //         console.log(personalMovieDB);
// //     }
// // }
// // showMyDB();
// ///////////////////////////////////////////////////////
// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat);
//
// function writeYourGenres() {
//     let answer;
//     for (let i = 0; i < 3; i++) {
//         answer = prompt(`Your favorite genre number ${i + 1}?`);
//         personalMovieDB.genres.push(answer);
//
//         // personalMovieDB.genres[i] = answer;
//         // personalMovieDB.genres[i] = prompt(`Your favorite genre number ${i + 1}?`);
//     }
// }
// writeYourGenres();

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

// let result = '';
// const length = 7;
//
// for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }
//     result += '\n';
// }
// console.log(result);
//

// const lines = 6;
// let result = '';
// let emptySpace = ' '
// // Проверяется именно переменная result, формируйте строку в ней
// for (let i = 1; i <= lines ; i++) {
//     for (let j = 0; j < i + 2 ; j++) {
//         if (result == lines) {
//             result = result - lines + '*';
//         }
//         result += '*';
//     }
//     result += '\n';
// }
// console.log(result);

function calculateVolumeAndArea(num) {
    if (typeof(num) === 'string' || num === null || Math.sign(num) !== 1 || Number.isInteger(num) !== true) {
        return 'Error occurred';
    } else {
        let volume = Math.pow(num, 3),
            area = 6 * Math.pow(num, 2);
        // console.log(`Volume = ${volume}, area = ${area}`);
        return `Обьем куба: ${volume} площадь всей поверхности: ${area}`.toString();
    }
}
calculateVolumeAndArea(5);

function getCoupeNumber(place) {
    if (place === 0 || place >= 37) {
        return 'There are no such places';
    }
    if (typeof(place) === 'string' || place === null || Math.sign(place) !== 1 || Number.isInteger(place) !== true) {
        return 'Incorrect place';
    }
    else {
        place = Math.ceil(place/4);
        // row = Math.pow(place, 1/2);
        // coupe = Math.floor(row);
        // return `Your row is number ${coupe}`;
        return place;
    }
}
console.log((getCoupeNumber(36)));

// function showMessage() {
//
// }

// Math.sign(minutes) !== 1
function getTimeFromMinutes(minutes) {
    if (typeof(minutes) !== 'number' || Number.isInteger(minutes) !== true || minutes < 0) {
        return 'Incorrect time';
    }
    let min = minutes % 60;
    let hours = Math.trunc(minutes / 60);
    //Original (english version)
    // if (hours <= 1) {
    //     return `This is ${hours} hour and ${min} minutes`;
    // } else {
    //     return `This is ${hours} hours and ${min} minutes`;
    // }

    //Russian version
    // if (hours === 0) {
    //     return `Это ${hours} часов и ${min} минут`;
    // }
    // if (hours === 1) {
    //     return `Это ${hours} час и ${min} минут`;
    // }
    // if (hours > 1 || hours < 5) {
    //     return `Это ${hours} часа и ${min} минут`;
    // }
    // if(hours > 5) {
    //     return `Это ${hours} часов и ${min} минут`;
    // }
}
console.log(getTimeFromMinutes(210));
// || array.length < 4
function findMaxNumber(...arguments) {
    if (arguments.some((i) => Number.isNaN(i) || typeof(i) !== 'number')) {
        return 0;
    } else return Math.max(...arguments);

    // if (array.find((i) => Number.isNaN(i) || typeof(i) !== 'number')) {
    //     return 0
    // } else return Math.max(...array);
    //
    // if (array.find((i) => typeof(i) === 'number' && Number.isNaN(i)) !== true && array.length >= 4) {
    //     return Math.max(...array);
    // } else return 0;
    //
    //
    // if (isNaN(array.find(i => isNaN(i) || typeof(i) === 'object'))) {
    //     return 0
    // }
    // if (array.find((item) => typeof(item) === 'string' || array.length < 4)) {
    //     return 0;
    // } else ;
}
console.log(findMaxNumber(4, 5.5, 6, []));