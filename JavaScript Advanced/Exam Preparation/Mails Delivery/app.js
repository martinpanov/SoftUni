function solve() {
    let recipient = document.getElementById("recipientName");
    let title = document.getElementById("title");
    let message = document.getElementById("message");
    let addButton = document.getElementById("add");
    let resetButton = document.getElementById("reset");
    let ulList = document.getElementById("list");
    let ulSentList = document.getElementsByClassName("sent-list")[0];
    let ulDeleteList = document.getElementsByClassName("delete-list")[0];

    addButton.addEventListener("click", add);

    function add(e) {
        e.preventDefault();

        if (!recipient.value || !title.value || !message.value) {
            return;
        }

        let li = document.createElement("li");
        let titleH4 = document.createElement("h4");
        titleH4.textContent = `Title: ${title.value}`;
        li.appendChild(titleH4);

        let recipientH4 = document.createElement("h4");
        recipientH4.textContent = `Recipient Name: ${recipient.value}`;
        li.appendChild(recipientH4);

        let messageSpan = document.createElement("span");
        messageSpan.textContent = message.value;
        li.appendChild(messageSpan);

        let buttonsDiv = document.createElement("div");
        buttonsDiv.setAttribute("id", "list-action");

        let sendButton = document.createElement("button");
        sendButton.type = "submit";
        sendButton.setAttribute("id", "send");
        sendButton.textContent = "Send";
        buttonsDiv.appendChild(sendButton);

        let deleteButton = document.createElement("button");
        deleteButton.type = "submit";
        deleteButton.setAttribute("id", "delete");
        deleteButton.textContent = "Delete";
        buttonsDiv.appendChild(deleteButton);

        recipient.value = "";
        title.value = "";
        message.value = "";

        li.appendChild(buttonsDiv);
        ulList.appendChild(li);

        sendButton.addEventListener("click", send);

        function send(e) {
            e.preventDefault();
            let li = document.createElement("li");
            let recipient = document.createElement("span");
            recipient.textContent = recipientH4.textContent;

            let title = document.createElement("span");
            title.textContent = titleH4.textContent;

            let divButton = document.createElement("div");
            divButton.classList.add("btn");
            let button = document.createElement("button");
            button.type = "submit";
            button.textContent = "Delete";
            button.classList.add("delete");
            divButton.appendChild(button);

            li.appendChild(recipient);
            li.appendChild(title);
            li.appendChild(divButton);
            ulSentList.appendChild(li);

            e.target.parentElement.parentElement.remove();

            button.addEventListener("click", deleteEmails);

            function deleteEmails(e) {
                e.preventDefault();
                let li = document.createElement("li");

                let spanRecipient = document.createElement("span");
                spanRecipient.textContent = recipientH4.textContent;

                let spanTitle = document.createElement("span");
                spanTitle.textContent = titleH4.textContent;

                li.appendChild(spanRecipient);
                li.appendChild(spanTitle);
                ulDeleteList.appendChild(li);
                e.target.parentElement.parentElement.remove();
            }
        }

        deleteButton.addEventListener("click", deleteListMails);

        function deleteListMails(e) {
            e.preventDefault();
            let li = document.createElement("li");

            let spanRecipient = document.createElement("span");
            spanRecipient.textContent = recipientH4.textContent;

            let spanTitle = document.createElement("span");
            spanTitle.textContent = titleH4.textContent;

            li.appendChild(spanRecipient);
            li.appendChild(spanTitle);
            ulDeleteList.appendChild(li);
            e.target.parentElement.parentElement.remove();
        }
    }

    resetButton.addEventListener("click", reset);

    function reset(e) {
        e.preventDefault();
        recipient.value = "";
        title.value = "";
        message.value = "";
    }
}
solve()