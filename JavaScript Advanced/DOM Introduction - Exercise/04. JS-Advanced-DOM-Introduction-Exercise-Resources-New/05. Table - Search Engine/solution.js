function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let rows = document.querySelectorAll(".container tbody tr")
      let input = document.getElementById("searchField")
      for (let row of rows) {
         row.classList.remove("select")
         for (let i = 0; i < row.querySelectorAll(".container tbody tr td").length; i++) {
            if (row.querySelectorAll(".container tbody tr td")[i].textContent.includes(input.value)) {
               row.classList.add("select")
            }
         }
      }
   }
}