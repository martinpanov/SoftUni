function solve() {
    let firstName = document.getElementById("fname");
    let lastName = document.getElementById("lname");
    let email = document.getElementById("email");
    let birth = document.getElementById("birth");
    let position = document.getElementById("position");
    let salary = document.getElementById("salary");
    let addWorkerButton = document.getElementById("add-worker");
    let tbody = document.getElementById("tbody");
    let budget = 0;
    let sum = document.getElementById("sum");

    addWorkerButton.addEventListener("click", addWorker);

    function addWorker(e) {
        e.preventDefault();

        if (
            !firstName.value ||
            !lastName.value ||
            !email.value ||
            !birth.value ||
            !position.value ||
            !salary.value
        ) {
            return;
        }

        let tr = document.createElement("tr");
        let firstNameTD = document.createElement("td");
        firstNameTD.textContent = firstName.value;
        firstName.value = "";

        let lastNameTD = document.createElement("td");
        lastNameTD.textContent = lastName.value;
        lastName.value = "";

        let emailTD = document.createElement("td");
        emailTD.textContent = email.value;
        email.value = "";

        let birthTD = document.createElement("td");
        birthTD.textContent = birth.value;
        birth.value = "";

        let positionTD = document.createElement("td");
        positionTD.textContent = position.value;
        position.value = "";

        let salaryTD = document.createElement("td");
        salaryTD.textContent = salary.value;
        budget += Number(salary.value);
        sum.textContent = budget.toFixed(2);
        salary.value = "";

        let buttonsTD = document.createElement("td");

        let firedButton = document.createElement("button");
        firedButton.classList.add("fired");
        firedButton.textContent = "Fired";
        buttonsTD.appendChild(firedButton);

        let editButton = document.createElement("button");
        editButton.classList.add("edit");
        editButton.textContent = "Edit";
        buttonsTD.appendChild(editButton);

        tr.appendChild(firstNameTD);
        tr.appendChild(lastNameTD);
        tr.appendChild(emailTD);
        tr.appendChild(birthTD);
        tr.appendChild(positionTD);
        tr.appendChild(salaryTD);
        tr.appendChild(buttonsTD);
        tbody.appendChild(tr);

        editButton.addEventListener("click", edit);

        function edit(e) {
            firstName.value = firstNameTD.textContent;
            lastName.value = lastNameTD.textContent;
            email.value = emailTD.textContent;
            birth.value = birthTD.textContent;
            position.value = positionTD.textContent;
            salary.value = salaryTD.textContent;

            let salaryEdit = e.target.parentElement.parentElement.getElementsByTagName(
                "td"
            )[5].textContent;

            budget -= Number(salaryEdit);
            sum.textContent = budget.toFixed(2);

            e.target.parentElement.parentElement.remove();
        }

        firedButton.addEventListener("click", fire);

        function fire(e) {
            let salaryEdit = e.target.parentElement.parentElement.getElementsByTagName(
                "td"
            )[5].textContent;

            budget -= Number(salaryEdit);
            sum.textContent = budget.toFixed(2);

            e.target.parentElement.parentElement.remove();
        }
    }
}