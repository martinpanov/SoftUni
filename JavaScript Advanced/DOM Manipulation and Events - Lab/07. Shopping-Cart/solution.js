function solve() {
   let textArea = document.getElementsByTagName("textarea")[0]
   let products = Array.from(document.getElementsByClassName("product"))
   let checkOutButton = document.getElementsByClassName("checkout")[0]
   let productsNames = []
   let totalSum = 0
   for (let product of products) {
      let productName = product.querySelectorAll(".product-title")[0].textContent
      let productPrice = Number(product.querySelectorAll(".product-line-price")[0].textContent)
      let button = product.querySelectorAll(".add-product")[0]
      button.addEventListener("click", function () {
         if (!productsNames.includes(productName)) {
            productsNames.push(productName)
         }
         totalSum += Number(productPrice)
         textArea.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`
      })
   }
   checkOutButton.addEventListener("click", function () {
      textArea.textContent += `You bought ${productsNames.join(", ")} for ${totalSum.toFixed(2)}.`
      let buttons = Array.from(document.querySelectorAll("button"))
      buttons.forEach((button) => {
         button.disabled = true
      })
   })
}