let titles = document.querySelectorAll(".paragraph__title");

for (let i = 0; i < titles.length; i++) {
    titles[i].addEventListener("click", function() {
        let sibling = this.nextElementSibling;
        console.log(sibling)
        if (sibling.classList.contains("paragraph__content")) {
            console.log("hi2")
            sibling.classList.toggle("paragraph__content_closed");
        }
    });
}

let buttonOpener = document.querySelector(".tool__button-opener");
let buttonCloser = document.querySelector(".tool__button-closer");
let contents = document.querySelectorAll(".paragraph__content");

buttonOpener.addEventListener("click", () => {
    contents.forEach(content => {
        content.classList.remove("paragraph__content_closed");
    })
});

buttonCloser.addEventListener("click", () => {
    contents.forEach(content => {
        content.classList.add("paragraph__content_closed");
    })
});
