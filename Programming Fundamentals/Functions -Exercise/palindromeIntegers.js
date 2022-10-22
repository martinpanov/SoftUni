function palindromeIntegers(arr) {
    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i]
        let reversedArr = String(arr[i]).split('').reverse().join('')
        let isPalindrome = true
        if (currentNum == reversedArr) {
            isPalindrome = true
        } else {
            isPalindrome = false
        }
        console.log(isPalindrome)
    }
}
palindromeIntegers([123,323,421,121])