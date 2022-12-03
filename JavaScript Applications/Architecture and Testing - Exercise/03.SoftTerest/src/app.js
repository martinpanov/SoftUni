import { initiliaze } from "./router.js"
import { showCatalog } from "./views/catalog.js"
import { showCreate } from "./views/create.js"
import { showDetails } from "./views/details.js"
import { showHome } from "./views/home.js"
import { showLogin } from "./views/login.js"
import { showRegister } from "./views/register.js"
//import * as api from "./api/api.js"
import * as api from "./api/users.js"

const view = document.getElementById("pages")
view.textContent = ''

const links = {
    '/': showHome,
    "/catalog": showCatalog,
    '/create': showCreate,
    '/details': showDetails,
    '/login': showLogin,
    '/register': showRegister,
    '/logout': onLogOut
}

const router = initiliaze(links)

router.goTo("/")
router.navUpdate()

function onLogOut() {
    api.logout()
    router.goTo("/")
    router.navUpdate()
}