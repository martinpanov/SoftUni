function requestValidator(obj) {
    let validMethods = ["GET", "POST", "DELETE", "CONNECT"]
    let uriRegex = /^[\w.]+$/g
    let validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"]
    let invalidMessageChars = ["<", ">", "\\", "&", "'", '"']

    if (!validMethods.includes(obj["method"]) || !obj.hasOwnProperty("method")) {
        throw new Error("Invalid request header: Invalid Method")
    }

    if (!obj.hasOwnProperty("uri") || (!uriRegex.test(obj["uri"]) && obj["uri"] !== "*")) {
        throw new Error("Invalid request header: Invalid URI")
    }

    if (!obj.hasOwnProperty("version") || !validVersions.includes(obj["version"])) {
        throw new Error("Invalid request header: Invalid Version")
    }

    if (!obj.hasOwnProperty("message")) {
        throw new Error("Invalid request header: Invalid Message")
    }

    for (let character of obj["message"]) {
        if (invalidMessageChars.includes(character)){
            throw new Error("Invalid request header: Invalid Message")
        }
    }

    return obj
}
console.log(requestValidator(
    {
        method: 'POST',
        uri: 'home.bash',
        version: 'HTTP/2.0',
        message: '<>>'
      }
))