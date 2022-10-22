function solve() {
  let input = document.getElementById("input")
  let text = input.value.split(".")
  let output = document.getElementById("output")
  output.innerHTML = ''
  let paragraphs = ''
  for (let i = 0; i < text.length - 1; i+=3) {
    for (let k = i; k < i + 3; k++) {
      if (k >= text.length - 1) {
        break
      }
      paragraphs += text[k] + "."
    }
    output.innerHTML += `<p>${paragraphs}</p>`
    paragraphs = ''
  }
}