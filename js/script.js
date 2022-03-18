function navMenu() {
    var navi = document.getElementById("myNavbar");
    if (navi.className === "navbar") {
        navi.className += " responsive";
    } else {
        navi.className = "navbar";
    }
}