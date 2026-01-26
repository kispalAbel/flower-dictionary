const navToggle = document.getElementById("navToggle")
const navBar = document.getElementById("navBar")

// Oldal betöltésekor ellenőrzés
if (localStorage.getItem("navOpen") === "true") {
    navBar.classList.add("open")
} else {
    navBar.classList.remove("open")
}

navToggle.addEventListener("click", function() {
    navBar.classList.toggle("open")

    // Mentés localStorage-be
    const isOpen = navBar.classList.contains("open")
    localStorage.setItem("navOpen", isOpen)
})
