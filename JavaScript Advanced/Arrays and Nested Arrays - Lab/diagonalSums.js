function diagonalSums(numbers) {
	let firstSum = 0
	let secondSum = 0
	let arrayLength = Number(numbers.length - 1)

	for (let i = 0; i < numbers.length; i++) {
		firstSum += numbers[i][i]
		secondSum += numbers[i][arrayLength]
		
		arrayLength--
}	
console.log(`${firstSum} ${secondSum}`)

}
diagonalSums()