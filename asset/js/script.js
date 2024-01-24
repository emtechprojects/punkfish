window.addEventListener("scroll", function(){
    const parallax = document.querySelector('.parallax')
    const aboutUs = document.querySelector('.about-us')
    let x = window.scrollY
    console.log(x)

    // HIDE PARALLAX
    if(x > 420) {
        parallax.classList.add("active")
    } else {
        parallax.classList.remove("active")
    }

    // SHOW ABOUT US
    if(x > 600) {
        aboutUs.style.visibility = "visible"
    } else {
        aboutUs.style.visibility = "hidden"
    }
})
