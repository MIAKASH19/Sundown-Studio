const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

let elemcon = document.querySelector(".elem-container")
let fixed = document.querySelector(".fixed-media")
let elems = document.querySelectorAll(".elem")

elemcon.addEventListener("mouseenter", function(){
    fixed.style.display = "block"
})
elemcon.addEventListener("mouseleave", function(){
    fixed.style.display = "none"
})

elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        let media = e.getAttribute("data-media")
        console.log(media)
        fixed.style.backgroundImage = `url(${media})`
    })
})

if (window.innerWidth <= 600) {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 10,
      });
}
else{
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 60,
      });
}



let menu = document.querySelector('.menubar')

menu.addEventListener("click", function(){
    console.log("clicked")
    gsap.to(".fullscr", {
        y: "100%",
        duration: 0.8
    })
})
let close = document.querySelector('.close')

close.addEventListener("click", function(){
    console.log("Again clicked")
    gsap.to(".fullscr", {
        y: "-100%",
        duration: 1.2
    })
})

gsap.to(".loader", {
    y: "-100%",
    duration: .8,
    delay: 4
})