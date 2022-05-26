function walking(input) {
   let index = 0
   let steps = input[index++]
   let totalSteps = 0
   while (steps !== "Going home") {
    totalSteps += Number(steps)
    let difference = Math.abs(totalSteps - 10000)
    if (totalSteps >= 10000) {
        console.log(`Goal reached! Good job!`)
        console.log(`${difference} steps over the goal!`)
        break;
    }
    steps = input[index++]
   }
   steps = Number(input[index])
   totalSteps += steps
   let difference = Math.abs(totalSteps - 10000)
   if (totalSteps >= 10000) {
    console.log(`Goal reached! Good job!`)
    console.log(`${difference} steps over the goal!`)
    } else if (totalSteps < 10000){
       console.log(`${difference} more steps to reach goal.`)
   }
}
walking(["125",
"250",
"4000",
"30",
"2678",
"4682"])