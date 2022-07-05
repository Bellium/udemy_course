const numberOfFilms = prompt('How mach films are u watched?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt('One of the last viewed films?', '');
    let b = prompt('How rate u give for this film?', '');
    personalMovieDB.movies[a] = b;
}
console.log(personalMovieDB);

