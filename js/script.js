let css = document.querySelector('#changer')
let logo = document.querySelector('#logo')
let about = document.querySelector('#about')
let games = document.querySelector('#games')
let contact = document.querySelector('#contact')
let buttons = document.querySelector('#buttons2')
let dark=false;
css.addEventListener('click', ()=>{
  if(dark==false){
    logo.style.background = "#0f0f0f";
    about.style.background = "#0f0f0f";
    games.style.background = "#0f0f0f";
    contact.style.background = "#0f0f0f";
    document.body.style.background = '#0f0f0f';
    dark = true;
    console.log('Dark')
    return
  }
  if(dark==true){
    logo.style.background = "white";
    about.style.background = "#0f0f0f";
    games.style.background = "white";
    contact.style.background = "#0f0f0f";
    document.body.style.background = 'white';
    dark = false;
    console.log('White')
    return
  }
})
