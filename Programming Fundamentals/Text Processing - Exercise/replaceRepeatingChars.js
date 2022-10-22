function replaceRepeatingChars(chars) {
    let res = ''
    for (let i = 0; i < chars.length; i++) {
        if (chars.length > 1) {
            if (chars[i+1] !== chars[i]) {
                res += chars[i]
            }
        } else {
            res += chars[i]
        }
    }
    console.log(res)
}
replaceRepeatingChars('a')