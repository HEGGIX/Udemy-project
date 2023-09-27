let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let nameOfFilms = prompt("Один из последних просмотренных фильмов?",""),
    gradeOfFilms = prompt("Какую оценку ему поставите?", ""),
    nameOfFilms2 = prompt("Один из последних просмотренных фильмов?",""),
    gradeOfFilms2 = prompt("Какую оценку ему поставите?", "");
personalMovieDB.movies[nameOfFilms] = gradeOfFilms;
personalMovieDB.movies[nameOfFilms2] = gradeOfFilms2;
console.log(personalMovieDB);