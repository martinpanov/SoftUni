function editElement(ref, match, replacer) {
    let originalText = ref.textContent
    let regex = new RegExp(match, 'g')
    let edited = originalText.replace(regex, replacer)
    ref.innerHTML = edited
}