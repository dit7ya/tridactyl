
// import App from "./content/experimental_ui_lib/App.svelte"
import App from "./ui_lib/App.svelte"
const createUi = () => {

    const uiDiv = document.createElement("div")

    uiDiv.className = "_tridactyl_experimental_ui"
    uiDiv.id = "_tridactyl_experimental_ui"
    uiDiv.style.position = "fixed"
    uiDiv.style.display = "block"
    uiDiv.style.height = "40%"
    uiDiv.style.bottom = "0px"
    uiDiv.style.left = "10%"
    uiDiv.style.right = "10%"
    uiDiv.style.zIndex = "100000"

    document.body.appendChild(uiDiv)
    const app = new App({target: uiDiv})

}

export const experimental_ui = () => {
    createUi()
}
