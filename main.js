//control opening paragraphs when clicking on their headings

let titles = document.querySelectorAll(".paragraph__title");

for (let i = 0; i < titles.length; i++) {
    titles[i].addEventListener("click", function() {
        let sibling = this.nextElementSibling;
        if (sibling.classList.contains("paragraph__content")) {
            sibling.classList.toggle("paragraph__content_closed");
        }
    });
}


//control opening paragraphs when clicking on tool buttons

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


//control style of tool element when page scroll

let toolElement = document.getElementById('tool');
window.onscroll = function () {
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100 ) {
        toolElement.classList.add("tool-colored");
    } else {
        toolElement.classList.remove("tool-colored");
    }
};
