async function attachEvents() {
    const loadPostsBtn = document.getElementById("btnLoadPosts")
    const viewPostBtn = document.getElementById("btnViewPost")
    const response = await fetch("http://localhost:3030/jsonstore/blog/posts")
    const posts = await response.json()

    loadPostsBtn.addEventListener("click", loadPosts)

    function loadPosts() {
        const selectPosts = document.getElementById("posts")
        selectPosts.innerHTML = ''

        Object.values(posts).forEach(post => {
            const option = document.createElement("option")
            option.value = post.id
            option.textContent = post.title
            selectPosts.appendChild(option)
        }) 
    }

    viewPostBtn.addEventListener('click', viewPosts)

    async function viewPosts(e) {
        const postNameId = e.target.parentElement.querySelector("#posts").value

        if (postNameId === '') {
            return
        }
        
        const responseComments = await fetch("http://localhost:3030/jsonstore/blog/comments/")
        const dataComments = await responseComments.json()

        const postSelectedIndex = e.target.parentElement.querySelector("#posts").options.selectedIndex
        const postTitle = e.target.parentElement.querySelector("#posts").options[postSelectedIndex].textContent


        const h1PostTitle = document.getElementById("post-title")
        const pPostBody = document.getElementById("post-body")
        const ulComments = document.getElementById("post-comments")

        h1PostTitle.textContent = postTitle
        pPostBody.textContent = posts[postNameId].body
        ulComments.innerHTML = ''
        
        Object.values(dataComments).forEach(comment => {
            if (comment.postId === postNameId) {
                const li = document.createElement("li")
                li.id = comment.id
                li.textContent = comment.text
                ulComments.appendChild(li)
            }
        })

    }

}

attachEvents();