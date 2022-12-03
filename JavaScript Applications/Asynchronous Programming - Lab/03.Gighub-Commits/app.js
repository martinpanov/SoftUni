async function loadCommits() {
    try {
        const username = document.getElementById("username").value
        const repo = document.getElementById("repo").value
        const ul = document.getElementById("commits")
        
        const response = await fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
        const data = await response.json()
        
        if (!response.ok) {
            throw new Error(`Error: ${response.status} (Not found)`)
        }

        const items = data.map(commentAndAuthor => {
            const li = document.createElement("li")
            li.textContent = `${commentAndAuthor.commit.author.name}:${commentAndAuthor.commit.message}`
            return li
        })

        ul.replaceChildren(...items)

    } catch(error) {
        const ul = document.getElementById("commits")
        ul.textContent = error.message
    }
        
}