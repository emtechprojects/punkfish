window.addEventListener("scroll", function(){
    const parallax = document.querySelector('.parallax')
    let x = window.scrollY
    console.log(x)
    if(x > 500) {
        parallax.style.visibility = "hidden"
    } else {
        parallax.style.visibility = "visible"
    }
})
