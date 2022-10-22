window.addEventListener("load", solve);

function solve() {
  let make = document.getElementById("make")
  let model = document.getElementById("model")
  let year = document.getElementById("year")
  let fuelType = document.getElementById("fuel")
  let originalCost = document.getElementById("original-cost")
  let sellingPrice = document.getElementById("selling-price")
  let publishButton = document.getElementById("publish")
  let totalSum = 0

  publishButton.addEventListener("click", publish)

  function publish(e) {
    debugger
    e.preventDefault()

    if (!make.value || !model.value || !year.value || !fuelType.value || !originalCost.value || !sellingPrice.value || originalCost.value > sellingPrice.value) {
      debugger
      return
    }

    let tableBody = document.getElementById("table-body")
    let tableRow = document.createElement("tr")
    tableRow.classList.add("row")

    let makeTD = document.createElement("td")
    makeTD.textContent = make.value
    tableRow.appendChild(makeTD)
    make.value = ""

    let modelTD = document.createElement("td")
    modelTD.textContent = model.value
    tableRow.appendChild(modelTD)
    model.value = ""

    let yearTD = document.createElement("td")
    yearTD.textContent = year.value
    tableRow.appendChild(yearTD)
    year.value = ""

    let fuelTypeTD = document.createElement("td")
    fuelTypeTD.textContent = fuelType.value
    tableRow.appendChild(fuelTypeTD)
    fuelType.value = ""

    let originalCostTD = document.createElement("td")
    originalCostTD.textContent = originalCost.value
    tableRow.appendChild(originalCostTD)
    originalCost.value = ""

    let sellingPriceTD = document.createElement("td")
    sellingPriceTD.textContent = sellingPrice.value
    tableRow.appendChild(sellingPriceTD)
    sellingPrice.value = ""

    let buttonsTD = document.createElement("td")

    let editButton = document.createElement("button")
    editButton.textContent = "Edit"
    editButton.classList.add("action-btn", "edit")

    let sellButton = document.createElement("button")
    sellButton.textContent = "Sell"
    sellButton.classList.add("action-btn", "sell")

    buttonsTD.appendChild(editButton)
    buttonsTD.appendChild(sellButton)
    tableRow.appendChild(buttonsTD)

    tableBody.appendChild(tableRow)

    editButton.addEventListener("click", edit)

    function edit(e) {
      make.value = makeTD.textContent
      model.value = modelTD.textContent
      year.value = yearTD.textContent
      fuelType.value = fuelTypeTD.textContent
      originalCost.value = originalCostTD.textContent
      sellingPrice.value = sellingPriceTD.textContent
      tableRow.remove()
    }

    sellButton.addEventListener("click", sell)

    function sell(e) {
      let carsList = document.getElementById("cars-list")
      let profit = document.getElementById("profit")
      let li = document.createElement("li")
      li.classList.add("each-list")

      let makeAndModel = document.createElement("span")
      makeAndModel.textContent = `${makeTD.textContent} ${modelTD.textContent}`
      li.appendChild(makeAndModel)

      let year = document.createElement("span")
      year.textContent = yearTD.textContent
      li.appendChild(year)

      let difference = document.createElement("span")
      let differenceCalc = Number(sellingPriceTD.textContent) - Number(originalCostTD.textContent)
      difference.textContent = differenceCalc
      li.appendChild(difference)

      carsList.appendChild(li)
      tableRow.remove()
      
      totalSum += differenceCalc
      profit.textContent = totalSum.toFixed(2)

    }
  }

}
