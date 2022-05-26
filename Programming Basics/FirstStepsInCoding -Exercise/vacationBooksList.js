function vacationBooksList(input){
    let numPagesRead = Number(input[0]);
    let pagesReadPerHour = Number(input[1]);
    let daysBooksMustBeRead = Number(input[2]);
    let calculation = (numPagesRead / pagesReadPerHour) / daysBooksMustBeRead;
    console.log(calculation);
}
vacationBooksList(["212", "20", "2"]);