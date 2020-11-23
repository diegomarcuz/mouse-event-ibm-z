const card = document.querySelector('.card')
const container = document.querySelector('.container')
const image = document.querySelector(".card .image-container img")

container.addEventListener("mousemove", e => {
    const x = (window.innerWidth / 2 - e.pageX) / 10;
    const y = (window.innerHeight / 2 - e.pageY) / 10;

    card.style.transform = ` rotateY(${x}deg) rotateX(${y}deg)`
})



container.addEventListener("mouseenter", e => {

    card.style.transition = `none`
})
card.addEventListener("mouseenter", e => {
    image.style.transform = `translateZ(42px)`
})

container.addEventListener("mouseleave", e => {
    card.style.transform = ` rotateY(0deg) rotateX(0deg)`
    image.style.transform = `translateZ(0px)`
    card.style.transition = `all 0.5s ease`
})