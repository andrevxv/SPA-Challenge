import { body, home, universe, explore } from "./elements.js"

export function bgHome() {
  document.body.classList.add("home")
  document.body.classList.remove("universe")
  document.body.classList.remove("explore")

  home.classList.add("active-link")
  universe.classList.remove("active-link")
  explore.classList.remove("active-link")
}
export function bgUniverse() {
  document.body.classList.add("universe")
  document.body.classList.remove("home")
  document.body.classList.remove("explore")

  home.classList.remove("active-link")
  universe.classList.add("active-link")
  explore.classList.remove("active-link")
}
export function bgExplore() {
  document.body.classList.remove("universe")
  document.body.classList.remove("home")
  document.body.classList.add("explore")

  home.classList.remove("active-link")
  universe.classList.remove("active-link")
  explore.classList.add("active-link")
}
