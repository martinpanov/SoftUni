function solve() {
  let generateButton = document.querySelector("#exercise button")
  let buyButton = document.querySelectorAll("#exercise button")[1]
  let input = document.querySelector("#exercise textarea")
  let output = document.querySelectorAll("#exercise textarea")[1]
  let tbody = document.getElementsByTagName("tbody")[0]

  generateButton.addEventListener("click", function () {
    let obj = JSON.parse(input.value)

    for (let item of obj) {
      let newRow = document.createElement("tr")
      
      let imgTable = document.createElement("td")
      let newImgTag = document.createElement("img")
      newImgTag.src = item.img
      imgTable.appendChild(newImgTag)
      newRow.appendChild(imgTable)
      
      let nameTable = document.createElement("td")
      let nameParagraph = document.createElement("p")
      nameParagraph.textContent = item.name
      nameTable.appendChild(nameParagraph)
      newRow.appendChild(nameTable)
      
      let priceTable = document.createElement("td")
      let priceParagraph = document.createElement("p")
      priceParagraph.textContent = item.price
      priceTable.appendChild(priceParagraph)
      newRow.appendChild(priceTable)
      
      let decFactorTable = document.createElement("td")
      let decFactorParagraph = document.createElement("p")
      decFactorParagraph.textContent = item.decFactor
      decFactorTable.appendChild(decFactorParagraph)
      newRow.appendChild(decFactorTable)
      
      let checkBoxTable = document.createElement("td")
      let checkBox = document.createElement("input")
      checkBox.type = "checkbox"
      checkBoxTable.appendChild(checkBox)
      newRow.appendChild(checkBoxTable)

      tbody.appendChild(newRow)
    }
  })

  let furnitureNames = []
  let decorFactorCounter = 0
  let totalPrice = 0
  let avgdecorFactor = 0

  buyButton.addEventListener("click", function () {
    let checkBoxes = Array.from(document.querySelectorAll("tbody tr td input"))
    for (let checkBox of checkBoxes) {
      if (checkBox.checked === true) {
        furnitureNames.push(checkBox.parentElement.parentElement.querySelector("td p").textContent)
        totalPrice += Number(checkBox.parentElement.parentElement.querySelectorAll("td p")[1].textContent)
        avgdecorFactor += Number(checkBox.parentElement.parentElement.querySelectorAll("td p")[2].textContent)
        decorFactorCounter++
      }
    }
    avgdecorFactor = avgdecorFactor / decorFactorCounter
    output.value += `Bought furniture: ${furnitureNames.join(", ")}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgdecorFactor}`
  })

}