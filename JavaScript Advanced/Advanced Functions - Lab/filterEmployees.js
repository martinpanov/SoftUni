function filterEmployees(data, criteria) {
    let personData = JSON.parse(data)
    let res = []
    if (criteria === "all") {
        personData.forEach((person, index) => {
        console.log(`${index}. ${person.first_name} ${person.last_name} - ${person.email}`)})
    } else {
        let indicator = criteria.split("-").pop()
        for (let person of personData) {
            for (let value of Object.values(person)) {
                if (value === indicator) {
                    res.push({
                        "id": person.id,
                        "first_name": person.first_name,
                        "last_name": person.last_name,
                        "email": person.email
                    })
                }
            }
        }
        res.forEach((person, index) => {
        console.log(`${index}. ${person.first_name} ${person.last_name} - ${person.email}`)})
    }
}
filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female'
)