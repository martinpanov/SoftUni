function solve() {
  let text = document.getElementById("text").value
  let arrayText = text.split(" ")
  let namingConvention = document.getElementById("naming-convention").value
  let res = ''
  switch (namingConvention) {
    case "Camel Case":
      for (let i = 0; i < arrayText.length; i++) {
        if (i === 0) {
          arrayText[0] = arrayText[0].toLowerCase()
        } else {
          arrayText[i] = arrayText[i][0].toUpperCase() + arrayText[i].toLowerCase().slice(1)
        }
      }
      res = arrayText.join("")
    break
    case "Pascal Case":
      for (let i = 0; i < arrayText.length; i++) {
        arrayText[i] = arrayText[i][0].toUpperCase() + arrayText[i].toLowerCase().slice(1)
      }
      res = arrayText.join("")
    break
    default:
      res = "Error!"
  }
  document.getElementById("result").textContent = res
}