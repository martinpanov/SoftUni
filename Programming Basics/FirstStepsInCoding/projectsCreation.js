function projectsCreation(input) {
    let nameOfArchitect = input[0];
    let hoursNeeded = 3
    let numOfProjects = Number(input[1]);
    let totalHours = hoursNeeded * numOfProjects
    console.log(`The architect ${nameOfArchitect} will need ${totalHours} hours to complete ${numOfProjects} project/s.`)
}
projectsCreation(["Sanya", "9"])