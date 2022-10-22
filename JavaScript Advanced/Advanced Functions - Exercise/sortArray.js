function sortArray(array, argument) {
   if (argument === "asc") {
    return array.sort((a,b) => a-b)
   }
   return array.sort((a,b) => b-a)

}
console.log(sortArray([10, 8, 5, 7, 9, 6], 'desc'))