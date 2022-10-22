function create(words) {
   let mainDiv = document.getElementById("content")
   for (let i = 1; i < words.length + 1; i++){
      let createElement = document.createElement("div")
      let paragraph = document.createElement("p")
      paragraph.textContent = `Section ${i}`
      paragraph.style.display = 'none'
      createElement.appendChild(paragraph)
      mainDiv.appendChild(createElement)
      createElement.addEventListener("click", function (event) {
         event.target.querySelector("p").style.display = 'block'
      })
   }
}