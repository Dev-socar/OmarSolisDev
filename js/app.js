
function getUrl(){
    var URL = window.location.pathname;
    if(URL == "/index.html"){
        var a = document.getElementById('eng');
        a.className += "marcar";
    }else{
        var a = document.getElementById('esp');
        a.className += "marcar";
    }
    
}
window.onload = getUrl();

function hiddenMenu(){
    var menu = document.querySelector('.menu-lateral');
    var burguer = document.querySelector('.nav .menu');
    burguer.style.margin = '1%'; 
    menu.style.left = '-500px';
}
function showMenu(){
    var menu = document.querySelector('.menu-lateral');
    var burguer = document.querySelector('.nav .menu');
    burguer.style.marginLeft = '31%';
    menu.style.left = '0';
    if(screen.width == 425){
        burguer.style.marginLeft = '70%';
    }
}
function Link(){
    var link = document.querySelectorAll('.menu-lateral a');
    var menu = document.querySelector('.menu-lateral');
    var burguer = document.querySelector('.nav .menu');
    link.forEach(el =>{
        el.addEventListener('click', ()=>{
            console.log('ocultar');
            burguer.style.margin = '1%'; 
            menu.style.left = '-500px';
        })
    })
    
}



