const targetElement = document.querySelectorAll(".fade_in");

document.addEventListener("scroll", function() {
    for(let i = 0; i < targetElement.length; i++) {
        const getElementDistance = targetElement[i].getBoundingClientRect().top +targetElement[i].clientHeight * .2
        if(window.innerHeight > getElementDistance) {
            targetElement[i].classList.add("show");
        }
    }
})

window.onload = function() {
    for(let i = 0; i < targetElement.length; i++) {
        const getElementDistance = targetElement[i].getBoundingClientRect().top +targetElement[i].clientHeight * .2
        if(window.innerHeight > getElementDistance) {
            targetElement[i].classList.add("show");
        }
    }
}


