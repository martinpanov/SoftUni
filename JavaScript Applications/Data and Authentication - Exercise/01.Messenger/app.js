function attachEvents() {
    const send = document.getElementById("submit")
    const refresh = document.getElementById("refresh")
    const textArea = document.getElementById("messages")
    const url = 'http://localhost:3030/jsonstore/messenger'

    refresh.addEventListener("click", refreshMessages)

    async function refreshMessages() {
        const response = await fetch(url)
        const data = await response.json()
        textArea.value = ''
        Object.values(data).forEach((message, index) => {
            data.length - 1 !== index ? textArea.value += `${message.author}: ${message.content}\n` : textArea.value += `${message.author}: ${message.content}`
        })
    }

    send.addEventListener("click", sendMessage)

    async function sendMessage() {
        const name = document.querySelector("[name='author']").value
        const message = document.querySelector("[name='content']").value

        const response  = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                author: name,
                content: message
            })
        })

    }
}

attachEvents();