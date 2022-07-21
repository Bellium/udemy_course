// const personalMovieDB = {
//     count:0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function () {
//         personalMovieDB.count = +prompt('How many films are u watched?', '').trim();
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('How many films are u watched?', '').trim();
//         }
//     },
//     rememberMyFilms: function () {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('One of the last viewed films?', '').trim(),
//                 b = prompt('How rate u give for this film?', '').trim();
//             if ((a && b !== '') && (a && b !== null) && (a.length && b.length < 50)) {
//                 personalMovieDB.movies[a] = b;
//             } else i--;
//         }
//     },
//     detectPersonalLevel: function () {
//         if (personalMovieDB.count < 10) {
//             console.log('Viewed a few films');
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log('You are casual viewer');
//         } else if (personalMovieDB.count >= 30) {
//             console.log('You are a cinephile!');
//         }
//     },
//     showMyDB: function (hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     writeYourGenres: function () {
//         let answer;
//         // for (let i = 0; i < 3; i++) {
//             // answer = prompt(`Your favorite genre number ${i + 1}?`).trim();
//             // if (answer !== null && answer !== '') {
//             //     personalMovieDB.genres.push(answer);
//             // } else i--;
//
//             // personalMovieDB.genres[i] = answer;
//             // personalMovieDB.genres[i] = prompt(`Your favorite genre number ${i + 1}?`);
//
//         // }
//
//         for (let i = 0; i < 1; i++) {
//             let genre = prompt('Enter your favorite genre separated by commas', '');
//             if (genre !== null && genre !== '') {
//                 personalMovieDB.genres = genre.split(', ');
//             } else i--;
//
//             personalMovieDB.genres.forEach((item, i) => {
//                 console.log(`Favorite genre #${i + 1} - it is ${item}`);
//             })
//         }
//
//     },
//     toggleVisibleMyDB: function () {
//         personalMovieDB.privat ? personalMovieDB.privat = false : personalMovieDB.privat = true;
//         // personalMovieDB.privat ?  false : true;
//     }
// };
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.writeYourGenres();
// console.log()
// console.log(personalMovieDB.showMyDB(personalMovieDB.privat));

// // OOP
// const stranger = {
//     health: 100,
//     armor: 80,
//     sayHello: function() {
//         console.log('hello')
//     }
// }
//
// const ray = {
//     armor: 500
// }
//
// //deprecated
// // ray.__proto__ = stranger;
// // console.log(ray.health);
// // console.log(ray.sayHello());
//
// //new
// Object.setPrototypeOf(ray, stranger);
// console.log(ray.sayHello());
//
// //correct
// //create new object and set the prototype
// const leo = Object.create(stranger);
// console.log(leo.sayHello());





