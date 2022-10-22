function encodeAndDecodeMessages() {
    let textInput = document.querySelector("textarea")
    let decodeTextInput = document.querySelectorAll("textarea")[1]
    let encode = document.querySelector("button")
    let decode = document.querySelectorAll("button")[1]
    encode.addEventListener("click", function () {
        let res = ''
        for (let i = 0; i < textInput.value.length; i++) {
            res += String.fromCharCode(textInput.value.charCodeAt(i) + 1)
        }
        decodeTextInput.value = res
        textInput.value = ''
    })
    decode.addEventListener("click", function () {
        let res = ''
        for (let i = 0; i < decodeTextInput.value.length; i++) {
            res += String.fromCharCode(decodeTextInput.value.charCodeAt(i) - 1)
        }
        decodeTextInput.value = res
    })
}