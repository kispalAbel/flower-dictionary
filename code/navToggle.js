const navToggle = document.getElementById("navToggle")
const navBar = document.getElementById("navBar")

navToggle.addEventListener("click", function() {
    navBar.classList.toggle("open")
})