//active-nav state
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(link => link.classList.remove('active-nav'));
        link.classList.add('active-nav');
    });
});

//scroll navbar transition
const containerElm = document.documentElement;
let lastScrollTop = containerElm.scrollTop;
const header = document.querySelector('header');
let scrollTimer;

window.addEventListener("scroll", () => {
    const st = containerElm.scrollTop;
    if (st > lastScrollTop) {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => { //delay for navbar to hide
            header.classList.add('scroll-down');
            console.log("Scrolling down");
        }, 1000);
    } else if (st < lastScrollTop) {
        clearTimeout(scrollTimer); //clear timeout to override scrolldown
        header.classList.remove('scroll-down');
        console.log("Scrolling up");
    } else {
        console.log("Scrolling stopped");
    }
    lastScrollTop = st <= 0 ? 0 : st;
});


//reveal-transition IntersectionObserver
const observer1 = new IntersectionObserver((entries)=> {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            console.log(entry);
            entry.target.classList.add('reveal-transition');
        } else {
            entry.target.classList.remove('reveal-transition');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer1.observe(element));

//box expander
function expandBox(box) {
    box.classList.remove('project-box');
    box.classList.add("expanded");
}