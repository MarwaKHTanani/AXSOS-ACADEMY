var count = document.querySelector(".like-num");

function like() {
    let likes = parseInt(count.innerText);
    likes++;
    count.innerText = likes;
}