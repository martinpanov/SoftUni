function extractFile(directory) {
    let splittedDirectory = directory.split("\\")
    let wholeFile = splittedDirectory[splittedDirectory.length - 1].split(".")
    let fileExtension = wholeFile.pop()
    let fileName = wholeFile.join(".")
    console.log(`File name: ${fileName}`)
    console.log(`File extension: ${fileExtension}`)
}
extractFile('C:\\Internal\\training-internal\\Template.bak.pptx')