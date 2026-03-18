function login(elm) {
    if (elm.innerText === "Login") {
        elm.innerText = "Logout";
    } else {
        elm.innerText = "Login";
    }

}

function definition(elm) {
    elm.remove();
}

function like(elm) {
    alert("ninja was liked");
}