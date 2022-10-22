function townToJSON(data) {
    let res = []
    for (let i = 1; i < data.length; i++) {
        let [cityName, cityLatitude, cityLongitude] = data[i].split(" | ")
        cityName = cityName.split("| ")
        cityName.shift()
        cityName = cityName.join("")
        cityLatitude = Number(cityLatitude).toFixed(2)
        cityLongitude = cityLongitude.split(" |")
        cityLongitude.pop()
        cityLongitude = Number(cityLongitude.join("")).toFixed(2)

            res.push({
                "Town": cityName,
                "Latitude": Number(cityLatitude),
                "Longitude": Number(cityLongitude)
            })
            
    }
    console.log(JSON.stringify(res))
}
townToJSON(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |'])