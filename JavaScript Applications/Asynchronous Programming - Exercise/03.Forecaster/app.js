function attachEvents() {
    const button = document.getElementById('submit')
    
    button.addEventListener("click", getWeather)

}
async function getWeather() {
    try {

        const response = await fetch("http://localhost:3030/jsonstore/forecaster/locations")
        const data = await response.json()
        const location = document.getElementById("location").value
        
        const filteredData = data.find(locationName => locationName.name === location)
        
        todayAndThreeDaysRequest(filteredData.code)
    } catch {
        const forecast = document.getElementById("forecast")
        forecast.style.display = "block"
        forecast.textContent = "Error"
    }
}

async function todayAndThreeDaysRequest(code) {
    try {

        const todayResponse = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`)
        const todayData = await todayResponse.json()
        
        
        const threeDaysResponse = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`)
        const threeDaysData = await threeDaysResponse.json()
        
        currentWeather(todayData)
        threeDaysWeather(threeDaysData)
    } catch {
        const forecast = document.getElementById("forecast")
        forecast.style.display = "block"
        forecast.textContent = "Error"
    }
}

function currentWeather(data) {
    const dataFragment = document.createDocumentFragment()
    const forecast = document.getElementById("forecast")
    let currentWeather = document.getElementById("current")

    if (!currentWeather) {
        currentWeather = document.createElement("div")
        currentWeather.id = "current"
        forecast.textContent = ''
        forecast.appendChild(currentWeather)
    }

    currentWeather.innerHTML = '<div class="label">Current conditions</div>'
    const forecastDiv = document.getElementById("forecast")
    let degreeSign = '&#176;'
    let conditionChar

    switch (data.forecast.condition) {
        case "Sunny": conditionChar = '&#x2600;'
        break
        case "Partly sunny": conditionChar = "&#x26C5;"
        break
        case "Overcast": conditionChar = "&#x2601;"
        break
        case "Rain": conditionChar = "&#x2614;"
        break
    }

    const divForecasts = document.createElement("div")
    divForecasts.classList.add("forecasts")

    const spanConditionSymbol = document.createElement("span")
    spanConditionSymbol.classList.add("condition", "symbol")
    spanConditionSymbol.innerHTML = conditionChar
    divForecasts.appendChild(spanConditionSymbol)

    const spanCondition = document.createElement("span")
    spanCondition.classList.add("condition")
    divForecasts.appendChild(spanCondition)

    const spanForecastDataOne = document.createElement("span")
    spanForecastDataOne.classList.add("forecast-data")
    spanForecastDataOne.textContent = data.name
    spanCondition.appendChild(spanForecastDataOne)

    const spanForecastDataTwo = document.createElement("span")
    spanForecastDataTwo.classList.add("forecast-data")
    spanForecastDataTwo.innerHTML = `${data.forecast.low}${degreeSign}/${data.forecast.high}${degreeSign}`
    spanCondition.appendChild(spanForecastDataTwo)

    const spanForecastDataThree = document.createElement("span")
    spanForecastDataThree.classList.add("forecast-data")
    spanForecastDataThree.textContent = data.forecast.condition
    spanCondition.appendChild(spanForecastDataThree)

    dataFragment.appendChild(divForecasts)
    forecastDiv.style.display = "block"
    currentWeather.appendChild(dataFragment)
}

function threeDaysWeather(data) {
    const dataFragment = document.createDocumentFragment()
    let upcoming = document.getElementById("upcoming")
    const forecast = document.getElementById("forecast")

    if (!upcoming) {
        upcoming = document.createElement("div")
        upcoming.id = "upcoming"
        forecast.appendChild(upcoming)
    }

    upcoming.innerHTML = '<div class="label">Three-day forecast</div>'

    let degreeSign = '&#176;'

    const divForeCastInfo = document.createElement("div")
    divForeCastInfo.classList.add("forecast-info")

    let dayOneSymbol

    switch(data.forecast[0].condition) {
        case "Sunny": dayOneSymbol = '&#x2600;'
        break
        case "Partly sunny": dayOneSymbol = "&#x26C5;"
        break
        case "Overcast": dayOneSymbol = "&#x2601;"
        break
        case "Rain": dayOneSymbol = "&#x2614;"
        break
    }

    const spanUpcomingOne = document.createElement("span")
    spanUpcomingOne.classList.add("upcoming")

    const spanSymbolOne = document.createElement("span")
    spanSymbolOne.classList.add("symbol")
    spanSymbolOne.innerHTML = dayOneSymbol
    spanUpcomingOne.appendChild(spanSymbolOne)

    const spanForecastOneOne = document.createElement("span")
    spanForecastOneOne.classList.add("forecast-data")
    spanForecastOneOne.innerHTML = `${data.forecast[0].low}${degreeSign}/${data.forecast[0].high}${degreeSign}`
    spanUpcomingOne.appendChild(spanForecastOneOne)

    const spanForecastOneTwo = document.createElement("span")
    spanForecastOneTwo.classList.add("forecast-data")
    spanForecastOneTwo.textContent = data.forecast[0].condition
    spanUpcomingOne.appendChild(spanForecastOneTwo)



    let dayTwoSymbol

    switch(data.forecast[1].condition) {
        case "Sunny": dayTwoSymbol = '&#x2600;'
        break
        case "Partly sunny": dayTwoSymbol = "&#x26C5;"
        break
        case "Overcast": dayTwoSymbol = "&#x2601;"
        break
        case "Rain": dayTwoSymbol = "&#x2614;"
        break
    }

    const spanUpcomingTwo = document.createElement("span")
    spanUpcomingTwo.classList.add("upcoming")

    const spanSymbolTwo = document.createElement("span")
    spanSymbolTwo.classList.add("symbol")
    spanSymbolTwo.innerHTML = dayTwoSymbol
    spanUpcomingTwo.appendChild(spanSymbolTwo)

    const spanForecastTwoOne = document.createElement("span")
    spanForecastTwoOne.classList.add("forecast-data")
    spanForecastTwoOne.innerHTML = `${data.forecast[1].low}${degreeSign}/${data.forecast[1].high}${degreeSign}`
    spanUpcomingTwo.appendChild(spanForecastTwoOne)

    const spanForecastTwoTwo = document.createElement("span")
    spanForecastTwoTwo.classList.add("forecast-data")
    spanForecastTwoTwo.textContent = data.forecast[1].condition
    spanUpcomingTwo.appendChild(spanForecastTwoTwo)



    let dayThreeSymbol

    switch(data.forecast[2].condition) {
        case "Sunny": dayThreeSymbol = '&#x2600;'
        break
        case "Partly sunny": dayThreeSymbol = "&#x26C5;"
        break
        case "Overcast": dayThreeSymbol = "&#x2601;"
        break
        case "Rain": dayThreeSymbol = "&#x2614;"
        break
    }

    const spanUpcomingThree = document.createElement("span")
    spanUpcomingThree.classList.add("upcoming")

    const spanSymbolThree = document.createElement("span")
    spanSymbolThree.classList.add("symbol")
    spanSymbolThree.innerHTML = dayThreeSymbol
    spanUpcomingThree.appendChild(spanSymbolThree)

    const spanForecastThreeOne = document.createElement("span")
    spanForecastThreeOne.classList.add("forecast-data")
    spanForecastThreeOne.innerHTML = `${data.forecast[2].low}${degreeSign}/${data.forecast[2].high}${degreeSign}`
    spanUpcomingThree.appendChild(spanForecastThreeOne)

    const spanForecastThreeTwo = document.createElement("span")
    spanForecastThreeTwo.classList.add("forecast-data")
    spanForecastThreeTwo.textContent = data.forecast[2].condition
    spanUpcomingThree.appendChild(spanForecastThreeTwo)

    dataFragment.appendChild(spanUpcomingOne)
    dataFragment.appendChild(spanUpcomingTwo)
    dataFragment.appendChild(spanUpcomingThree)

    upcoming.appendChild(dataFragment)
}

attachEvents();