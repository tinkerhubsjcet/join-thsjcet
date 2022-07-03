var x = window.matchMedia("(max-width: 610px)")
changeView(x)

function changeView(x) {
    if (x.matches) {
        location.replace("mobile-Form.html");
    }
}