function personTitles(input) {
    const age = Number(input[0]);
    const gender = input[1];

    if (gender === "m") {
        if (age < 16) {
            console.log("Master");
        } else {
            console.log("Mr.");
        }
    }
    if (gender === "f") {
        if (age < 16) {
            console.log("Miss");
        } else {
            console.log("Ms.");
        }
    }
}
personTitles(["12",
"f"])