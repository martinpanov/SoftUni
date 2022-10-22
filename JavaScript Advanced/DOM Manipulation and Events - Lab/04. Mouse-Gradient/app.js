function attachGradientEvents() {
    let gradientBox =  document.getElementById("gradient-box")
    gradientBox.addEventListener("mousemove", function (event) {
        let gradientProgress = event.offsetX / (event.target.clientWidth - 1)
        gradientProgress = Math.trunc(gradientProgress * 100)
        document.getElementById("result").textContent = `${gradientProgress}%`
    })
    gradientBox.addEventListener("mouseout", function (event) {
        document.getElementById("result").textContent = ''
    })
}