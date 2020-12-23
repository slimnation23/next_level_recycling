let menuToggle = () => {
    document.querySelector('nav').classList.toggle('active')
}

$(document).ready(function(){
    $('ul li').click(function(){
        $(this).siblings().removeClass('active')
        $(this). toggleClass('active')
    })
})