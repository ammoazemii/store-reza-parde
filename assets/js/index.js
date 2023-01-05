
var slideindex = 1
showslides(slideindex)

function controlslides(n){
    slideindex += n
    showslides(slideindex)
}

function dotside(n){
    slideindex = n
    showslides(slideindex)
}

function showslides(n){
    let i
    const slides = document.getElementsByClassName("slide")
    const dots = document.getElementsByClassName("dot")
    if(n > slides.length){
        slideindex=1
    }
    if (n<1){
        slideindex=slides.length
    }
    for(let i=0 ; i<slides.length ; i++){
        slides[i].style.display="none"
    }
    for(let index=0 ; index<dots.length ; index++){
        dots[index].className= dots[index].className.replace("active","")
    }
    slides[slideindex-1].style.display="block"
    dots[slideindex-1].className += "active"
}