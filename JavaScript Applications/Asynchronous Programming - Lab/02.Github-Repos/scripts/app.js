async function loadRepos() {

	try {
		const username = document.getElementById("username").value
		const response = await fetch(`https://api.github.com/users/${username}/repos`)
		
		if (response.ok == false) {
			throw new Error(`${response.status} ${response.statusText}`)
		}
		
		const repos = await response.json()
		const list = document.getElementById("repos")
		
		const items = repos.map(repo => {
			const li = document.createElement("li")
			const aHref = document.createElement("a")
			aHref.href = repo.html_url
			aHref.textContent = repo.full_name
			li.appendChild(aHref)
			return li
		})
		
		list.replaceChildren(...items)
	} catch (error) {
		const list = document.getElementById("repos")
		list.textContent = error.message
	}

}