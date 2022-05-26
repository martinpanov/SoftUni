function traveling(input){
    let index = 0;
    let command = input[index];
    let sum = 0 ;
    while ( command !== "End"){
     let destination = command;
     index++;
     let target = Number(input[index]);
     index++;
       while ( sum < target ){
       let currSum = Number(input[index]);
       sum += currSum ;
       index++;
      }
     console.log(`Going to ${destination}!`)
     command = input[index];
     sum = 0;
     }
    }
    
traveling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])
