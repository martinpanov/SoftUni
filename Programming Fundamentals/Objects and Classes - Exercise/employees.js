function employees(arr) {
   let object = {}
   for (let el of arr) {
        object.name = el
        object.number = el.length
        console.log(`Name: ${object.name} -- Personal Number: ${object.number}`)
   }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])