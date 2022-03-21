const targetElement = document.querySelectorAll("div.fade_in, div.fade_in2");

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


