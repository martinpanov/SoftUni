function movies(arr) {
    let movies = []
    for (let el of arr) {
       if (el.includes("addMovie")) {
            let movie = el.replace("addMovie ","")
            movies.push({name:movie})
       }
       if (el.includes("directedBy")) {
            let [name, director] = el.split(" directedBy ")
            for (let el of movies) {
                if (el.name == name) {
                    el.director = director
                }
            }
       }
       if (el.includes("onDate")) {
            let [name, date] = el.split(" onDate ")
            for (let el of movies) {
            if (el.name == name) {
                el.date = date
                }
            }
       }
    }
    for (let el of movies) {
        if (el.name && el.director && el.date) {
            console.log(JSON.stringify(el))
        }
    }
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ])