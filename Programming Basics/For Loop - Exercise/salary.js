function salary(input) {
    const facebook = 150;
    const instagram = 100;
    const reddit = 50;
    let index = 0;
    let browserTabs = Number(input[index]);
    index++
    let salary = Number(input[index]);
    index++

    for (let i = 0; i <= browserTabs; i++) {
        let nameOfWebsite = input[index];
        index++
        if (nameOfWebsite === "Facebook") {
            salary -= facebook
        } else if (nameOfWebsite === "Instagram") {
            salary -= instagram
        } else if (nameOfWebsite === "Reddit") {
            salary -= reddit
        } else {
            salary
        }
        if (salary === 0) {
            console.log("You have lost your salary.")
            break;
        }
    }
    if (salary > 0) {
    console.log(salary)
    }
}
salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])