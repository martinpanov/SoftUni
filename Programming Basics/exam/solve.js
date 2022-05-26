function bestPlayer(input){
 
    let index = 0
     
     
    let command = input[index]
     
     
    let maxGoals = Number.MIN_SAFE_INTEGER
    let name = ""
     
    while(command !== "END"){
    name = input[index]
     
    index++
    let tempGoals = Number(input[index])
     
    if(maxGoals < tempGoals){
        maxGoals = tempGoals
    }
     
    if (maxGoals >= 10){
        console.log(`${name} is the best player!`)
        console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`)
        break;
     
    }
    index++
    command = input[index]
     
    }
     
    if(command === "END"){
        console.log(`${name} is the best player!`)
        if (maxGoals >= 3) {
            console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`)
        } else {
            console.log(`He has scored ${maxGoals} goals.`)
        }
     
    }
     
     
     
    }
bestPlayer(["Neymar",
"2",
"Ronaldo",
"1",
"Messi",
"3",
"END"])