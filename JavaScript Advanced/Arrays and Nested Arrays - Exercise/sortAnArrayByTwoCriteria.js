function sortAnArrayByTwoCriteria(array) {
    return array.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b)
    }).forEach(element => console.log(element))
}
sortAnArrayByTwoCriteria(['alpha', 
'beta', 
'gamma'])