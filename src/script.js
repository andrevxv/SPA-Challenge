import { Router } from "./routes.js"
import * as background from "./events.js"
import * as page from "./elements.js"

// page.home.addEventListener("click", () => background.bgHome())
// page.universe.addEventListener("click", () => background.bgUniverse())
// page.explore.addEventListener("click", () => background.bgExplore())

const router = new Router()

router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/explore", "/pages/explore.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle() // voltar a pagina sem travar
window.route = () => router.route() // trazendo a função route para o window global
