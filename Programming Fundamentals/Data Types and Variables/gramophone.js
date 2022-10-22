function gramophone (band, album, song) {
    let calc = ((album.length * band.length) * song.length / 2) / 2.5
    console.log(`The plate was rotated ${Math.ceil(calc)} times.`)
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')