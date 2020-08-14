'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

// let i = 0;
// while (i < 2) {
// 	const q1 = prompt("Один из последних просмотренных фильмов?", ""),
// 		  q2 = +prompt("На сколько оцените его?", "");
// 	i++;
// 	if (q1 != null && q2 != null && q1 != "" && q2 != "" && q1.length < 50) {
// 		personalMovieDB.movies[q1] = q2;
// 		console.log("done");
// 	} else {
// 		console.log("error");
// 		i--;
// 	}
// }

// let i = 0;
// do {
//   const q1 = prompt("Один из последних просмотренных фильмов?", ""),
//         q2 = +prompt("На сколько оцените его?", "");
//   i++;
//   if (q1 != null && q2 != null && q1 != "" && q2 != "" && q1.length < 50) {
//     personalMovieDB.movies[q1] = q2;
//     console.log("done");
//   } else {
//     console.log("error");
//     i--;
//   }
// } while (i < 2);

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB.movies);