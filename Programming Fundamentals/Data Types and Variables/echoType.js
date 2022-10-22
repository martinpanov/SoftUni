function echoType (type) {
    if (typeof type === "string") {
        console.log("string")
        console.log(type)
    } else if (typeof type === "number") {
        console.log("number")
        console.log(type)
    } else {
        console.log("object")
        console.log("Parameter is not suitable for printing")
    }
}
echoType(null)