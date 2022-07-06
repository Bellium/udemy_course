const numberOfFilms = prompt('How mach films are u watched?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// for (let i = 0; i < 2; i++) {
//     const a = prompt('One of the last viewed films?', ''),
//           b = prompt('How rate u give for this film?', '');
//     if ((a && b !== '') && (a && b !== null) && (a.length && b.length < 50)) {
//         personalMovieDB.movies[a] = b;
//     } else i--;
// }
// console.log(personalMovieDB);

// if (personalMovieDB.count < 10) {
//     console.log('Viewed a few films');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('You are casual viewer');
// } else if (personalMovieDB.count >= 30) {
//     console.log('You are a cinephile!');
// }














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