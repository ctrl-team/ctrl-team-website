const logo_section = document.getElementById('logo');
const backtotop = document.getElementById('backtotop');

let logo_height = logo_section.offsetHeight;

window.addEventListener('scroll', ()=>{
    if(window.scrollY > logo_height){
        backtotop.style.display = 'block';
        backtotop.style.opacity = 1;
    }else{
        backtotop.style.display = 'none'
        backtotop.style.opacity = 0;
    }
})

backtotop.addEventListener('click', ()=>{
    window.scrollTo(0, 0)
})