function pieceOfPie(array, stringOne, stringTwo) {
    return array.slice(array.indexOf(stringOne), array.indexOf(stringTwo) + 1)
}
console.log(pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'))