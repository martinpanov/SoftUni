function numberInRange(input) {
    const num = Number(input[0]);

   if (num === 0 || num > 100 || num < -100) {
       console.log("No")
   } else if (num > 0 || num <= 100 && num >= -100) {
       console.log("Yes")
   }
}
numberInRange(["-101"]);