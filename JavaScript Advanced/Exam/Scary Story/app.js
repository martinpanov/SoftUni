window.addEventListener("load", solve);

function solve() {
  let firstName = document.getElementById("first-name")
  let lastName = document.getElementById("last-name")
  let age = document.getElementById("age")
  let storyTitle = document.getElementById("story-title")
  let genre = document.getElementById("genre")
  let yourStory = document.getElementById("story")
  let publishButton = document.getElementById("form-btn")
  let ulPreviewList = document.getElementById("preview-list")

  publishButton.addEventListener("click", publish)

  function publish(e) {
    if (!firstName.value || !lastName.value || !age.value || !storyTitle.value || !genre.value || !yourStory.value) {
      return
    }

    let li = document.createElement("li")
    li.classList.add("story-info")

    let article = document.createElement("article")

    let nameH4 = document.createElement("h4")
    nameH4.textContent = `Name: ${firstName.value} ${lastName.value}`
    article.appendChild(nameH4)

    let ageP = document.createElement("p")
    ageP.textContent = `Age: ${age.value}`
    article.appendChild(ageP)

    let titleP = document.createElement("p")
    titleP.textContent = `Title: ${storyTitle.value}`
    article.appendChild(titleP)

    let genreP = document.createElement("p")
    genreP.textContent = `Genre: ${genre.value}`
    article.appendChild(genreP)

    let yourStoryP = document.createElement("p")
    yourStoryP.textContent = yourStory.value
    article.appendChild(yourStoryP)

    li.appendChild(article)

    let saveButton = document.createElement("button")
    saveButton.classList.add("save-btn")
    saveButton.textContent = "Save story"
    li.appendChild(saveButton)

    let editButton = document.createElement("button")
    editButton.classList.add("edit-btn")
    editButton.textContent = "Edit story"
    li.appendChild(editButton)

    let deleteButton = document.createElement("button")
    deleteButton.classList.add("delete-btn")
    deleteButton.textContent = "Delete story"
    li.appendChild(deleteButton)

    ulPreviewList.appendChild(li)

    firstName.value = ""
    lastName.value = ""
    age.value = ""
    storyTitle.value = ""
    genre.value = ""
    yourStory.value = ""

    publishButton.disabled = true

    editButton.addEventListener("click", edit)

    function edit(e) {
      firstName.value = nameH4.textContent.split(" ")[1]
      lastName.value = nameH4.textContent.split(" ")[2]
      age.value = ageP.textContent.split("Age: ")[1]
      storyTitle.value = titleP.textContent.split("Title: ")[1]
      debugger
      genre.value = genreP.textContent.split("Genre: ")[1]
      yourStory.value = yourStoryP.textContent

      publishButton.disabled = false

      e.target.parentElement.remove()
    }

    saveButton.addEventListener("click", save)

    function save(e) {
      e.target.parentElement.parentElement.parentElement.parentElement.childNodes[1].remove()
      e.target.parentElement.parentElement.parentElement.parentElement.childNodes[2].remove()

      let h1ScaryStory = document.createElement("h1")
      h1ScaryStory.textContent = "Your scary story is saved!"

      debugger
      let mainDiv = document.getElementById("main")
      mainDiv.appendChild(h1ScaryStory)
    }

    deleteButton.addEventListener("click", deleteAction)

    function deleteAction(e) {
      e.target.parentElement.remove()
      publishButton.disabled = false
    }
  }

}
