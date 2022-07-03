function menuFunc() {
    var x = document.getElementById("links");
    var btn = document.getElementById("menu-btn")
    if (x.style.top === "0px") {
        x.style.top = "-240px"
        btn.style.transform = "rotate(0deg)"
    } else {
        x.style.top = "0px"
        btn.style.transform = "rotate(-90deg)"
    }
} 