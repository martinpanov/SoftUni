import * as api from "./api.js"

export async function getAllIdeas() {
    const ideas = api.get("/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc")
    return ideas
}

export async function createIdea(ideaData) {
    return api.post("/data/ideas", ideaData)
}

export async function getIdeaByID(id) {
    return api.get("/data/ideas/" + id)
}

export async function deleteIdea(id) {
    return api.delete("/data/ideas/" + id)
}