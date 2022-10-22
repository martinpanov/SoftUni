function getArticleGenerator(articles) {
    let divContent = document.getElementById("content")

    return function () {
        if (articles.length < 1) {
            return
        }
        let newArticle = document.createElement("article")
        newArticle.textContent = articles.shift()
        divContent.appendChild(newArticle)
    }
}
