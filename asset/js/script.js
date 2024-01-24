window.addEventListener("scroll", function(){
    const parallax = document.querySelector('.parallax')
    let x = window.scrollY
    console.log(x)
    if(x > 370) {
        parallax.classList.add("active")
    } else {
        parallax.classList.remove("active")
    }
})
