window.addEventListener("load", solve);

function solve() {
  let postTitle = document.getElementById("post-title")
  let postCategory = document.getElementById("post-category")
  let postContent = document.getElementById("post-content")
  let publishButton = document.getElementById("publish-btn")
  let reviewList = document.getElementById("review-list")
  let publishedList = document.getElementById("published-list")
  let clearButton = document.getElementById("clear-btn")

  publishButton.addEventListener("click", addNewPost)

  function addNewPost() {
    let postTitleValue = postTitle.value
    let postCategoryValue = postCategory.value
    let postContentValue = postContent.value
    
    if (!postTitleValue || !postCategoryValue || !postContentValue) {
      return
    }
    
    let createNewList = document.createElement("li")
    let createNewArticle = document.createElement("article")
    let createNewHeaderFour = document.createElement("h4")

    let createNewCategoryParagraph = document.createElement("p")
    let createNewContentParagraph = document.createElement("p")

    let createNewEditButton = document.createElement("button")
    let createNewApproveButton = document.createElement("button")

    createNewList.classList.add("rpost")
    createNewList.appendChild(createNewArticle)

    createNewHeaderFour.textContent = postTitleValue
    createNewArticle.appendChild(createNewHeaderFour)

    createNewCategoryParagraph.textContent = `Category: ${postCategoryValue}`
    createNewArticle.appendChild(createNewCategoryParagraph)

    createNewContentParagraph.textContent = `Content: ${postContentValue}`
    createNewArticle.appendChild(createNewContentParagraph)

    createNewEditButton.classList.add("action-btn", "edit")
    createNewApproveButton.classList.add("action-btn", "approve")
    createNewEditButton.textContent = 'Edit'
    createNewApproveButton.textContent = "Approve"

    createNewList.appendChild(createNewEditButton)
    createNewList.appendChild(createNewApproveButton)

    reviewList.appendChild(createNewList)
    postTitle.value = ''
    postCategory.value = ''
    postContent.value = ''

    createNewEditButton.addEventListener("click", edit)

    function edit(event) {
      postTitle.value = createNewHeaderFour.textContent
      postCategory.value = createNewCategoryParagraph.textContent.split(": ")[1]
      postContent.value = createNewContentParagraph.textContent.split(": ")[1]
      event.target.parentElement.remove()
    }

    createNewApproveButton.addEventListener("click", approve)

    function approve(event) {
      publishedList.appendChild(createNewList)

      event.target.parentElement.getElementsByClassName("action-btn")[0].remove()
      event.target.parentElement.getElementsByClassName("action-btn")[0].remove()
    }

    clearButton.addEventListener("click", () => createNewList.remove())
  }
}
