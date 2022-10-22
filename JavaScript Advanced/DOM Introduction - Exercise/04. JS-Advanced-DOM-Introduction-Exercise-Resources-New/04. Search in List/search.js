function search() {
   let towns = document.querySelectorAll("#towns li")
   for (let i = 0; i < towns.length; i++) {
      towns[i].style.textDecoration = ""
      towns[i].style.fontWeight = ""
   }
   let matches = 0
   let input = document.getElementById("searchText").value
   for (let i = 0; i < towns.length; i++) {
      if (towns[i].textContent.includes(input)) {
         towns[i].style.textDecoration = "underline"
         towns[i].style.fontWeight = "bold"
         matches++
      }
   }
   debugger
   let res = document.getElementById("result").textContent = `${matches} matches found`
}