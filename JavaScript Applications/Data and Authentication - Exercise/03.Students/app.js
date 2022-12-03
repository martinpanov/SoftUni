const form = document.getElementById("form")
const url = 'http://localhost:3030/jsonstore/collections/students'

window.addEventListener("load", loadStudents)
form.addEventListener("submit", submitData)

async function submitData(e) {
    e.preventDefault()
    const dataFromForm = new FormData(form)

    const firstName = dataFromForm.get("firstName")
    const lastName = dataFromForm.get("lastName")
    const facultyNumber = dataFromForm.get("facultyNumber")
    const grade = dataFromForm.get("grade")

    const postRequest = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            facultyNumber: facultyNumber,
            grade: grade
        })
    })
    loadStudents()
}

async function loadStudents() {
    const getRequest = await fetch(url)
    const data = await getRequest.json()

    const tableData = Object.values(data).map(student => {
        const tr = document.createElement("tr")

        const tdFirstName = document.createElement("td")
        tdFirstName.textContent = student.firstName

        const tdLastName = document.createElement("td")
        tdLastName.textContent = student.lastName

        const tdFacultyNumber = document.createElement("td")
        tdFacultyNumber.textContent = student.facultyNumber

        const tdGrade = document.createElement("td")
        tdGrade.textContent = student.grade

        tr.appendChild(tdFirstName)
        tr.appendChild(tdLastName)
        tr.appendChild(tdFacultyNumber)
        tr.appendChild(tdGrade)

        return tr
    })

    const tbody = document.querySelector("tbody")

    tbody.replaceChildren(...tableData)
}