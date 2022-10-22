function dayOfWeek (day) {
    if (day > 7) {
        console.log("Invalid day!")
    } else {
        let arr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        console.log(arr[day - 1])
    }
}
dayOfWeek(11)