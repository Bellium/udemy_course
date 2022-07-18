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


