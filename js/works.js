


var Works = [
    {
    "title":"Portafolio",
    "type":"Landing Page",
    "img":"resources/portafolio.png",
    "description":`This is my personal portfolio, here is some of my recent work, 
    as well as information about me, some skills I have and also my profiles so you can contact me`,
    "date": "17/10/2022",
    "url": "#",
    "imgs":[
        "resources/portafolio.png",
        "resources/portafolio2.png",
        "resources/portafolio3.png"
    ]
},
{
    "title":"Corpesa Inmobiliaria",
    "type":"Real estate website",
    "img":"resources/corpesa.png",
    "description":`Corpesa Inmobiliaria is a real estate company in which they put some of their properties,
     land, lots, etc. at the service of users. This project was developed with PHP as the backend, MYSQL 
     in the storage part and technologies such as HTML, JS and CSS for the frontend. Similarly, 
     the Dashboard section was implemented in which the user can create, update and delete information about their products. 
     It should be noted that this page is responsive.`,
     "date": "15/10/2022",
    "url": "https://corpesainmobiliaria.com/",
    "imgs":[
        "resources/corpesa1.png",
        "resources/corpesa2.png",
        "resources/corpesa3.png"
    ]    
},
{
    "title":"THR",
    "type":"Real estate website",
    "img":"resources/tierra_asesores.png",
    "description":`THR or Tierra Asesores Inmobiliarios is a real estate company, 
    the objective of this project was to promote its land in a more assertive way, a data filter was implemented,
     as well as a Dashboard so that the company's staff can create, update or delete information from their products. 
    This project was developed with HTML, CSS and JS for the Frontend and PHP for the Backend side.`,
    "date": "15/11/2021",
    "url":"http://www.tierraasesores.com/index.php",
    "imgs":[
        "resources/thr2.png",
        "resources/thr3.png",
        "resources/thr4.png"
    ]    
},
{
    "title":"BlogCafé",
    "type":"Blog Web Site",
    "img":"resources/BlogPortada.png",
    "description":`Blog Café is a project which I did to strengthen my html, js and css skills.
     The entire website is responsive for any mobile device.`,
    "date": "28/10/2022",
    "url":"https://relaxed-alpaca-2c5196.netlify.app/index.html",
    "imgs":[
        "resources/Blog2.png",
        "resources/Blog1.png",
        "resources/Blog3.png"
    ]    
},
{
    "title":"TarjetasMex",
    "type":"E-commerce website",
    "img":"resources/tarjeta.png",
    "description":`TarjetaMex was an electronic commerce which focused on the sale of gift cards for any holiday, 
    payment processing was implemented through PayPal with JavaScript, it also had a section in which users could 
    personalize the cards and send the details. via email. The technologies used for this project were HTML, CSS and Js 
    for the Frontend and PHP for the backend.`,
    "date": "07/09/2021",
    "url": "https://www.tarjetasmex.com/tendencias.php",
    "imgs":[
        "resources/tarjeta.png"
    ]
}
]
var grid = document.getElementById('grid');
    var i = 0;
    while(i != Works.length){
        var newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'work-item');
        var htmlDiv = `
        <div class="work-img">
            <img src="`+Works[i].img+`" alt="Imagen Proyecto">
        </div>
            <p class="work-title">`+Works[i].title+`</p>
            <span class="work-tipo">`+Works[i].type+`</span>
            <a onclick="ShowModal(`+[i]+`)" class="work-link">More</a>
        `;
        newDiv.innerHTML = htmlDiv;
        grid.appendChild(newDiv);
        i++;
    }
    function ShowModal(id){
        var work = Works[id];

        var modal = document.getElementById('modal');
        var html = "";
        if(document.getElementById('modalContent') == null){
            //No existe
            var modalContent = document.createElement('div');
            modalContent.setAttribute('id', 'modalContent');
            modalContent.setAttribute('class', 'modal-content');
            var modalImg = document.querySelector('#modalContent');
            html = `
            <h2>`+work.title+`</h2>
            <span>`+work.date+`</span>
            <div class="modal-imgs"></div>
            <p>`+work.description+`</p>
            <a  href="`+work.url+`" target="_blank" class="work-link white">See website</a>
            `;
            modalContent.innerHTML = html;
            modal.appendChild(modalContent);
            var j = 0;
            while( j!=work.imgs.length){
                var newImg = document.createElement('img');
                console.log(work.imgs[j]);
                newImg.setAttribute('class','img-modal');
                newImg.setAttribute('src', work.imgs[j]);
                document.querySelector('.modal-imgs').appendChild(newImg);
                j++;
            }
            modal.style.visibility = "visible";
            modal.style.opacity = "1";
            document.body.style.overflow='hidden';
        }else{
            modalContent =document.getElementById('modalContent');
            modal.removeChild(modalContent);
            var modalContent = document.createElement('div');
            modalContent.setAttribute('id', 'modalContent');
            modalContent.setAttribute('class', 'modal-content');
            html = `
            <h2>`+work.title+`</h2>
            <span>`+work.date+`</span>
            <div class="modal-imgs"></div>
            <p>`+work.description+`</p>
            <a  href="`+work.url+`" target="_blank" class="work-link white">See website</a>
            `;
            modalContent.innerHTML = html;
            modal.appendChild(modalContent);
            var j = 0;
            while( j!=work.imgs.length){
                var newImg = document.createElement('img');
                newImg.setAttribute('class','img-modal');
                newDiv.setAttribute('alt', "Imagen proyecto");
                newImg.setAttribute('src', work.imgs[j]);
                document.querySelector('.modal-imgs').appendChild(newImg);
                j++;
            }
            modal.style.visibility = "visible";
            modal.style.opacity = "1";
            document.body.style.overflow='hidden';
        }
        
    }
    function hiddenModal(){
        var modal = document.getElementById('modal');
        modal.style.visibility = "hidden";
        modal.style.opacity = "0";
        document.body.style.overflow='scroll';
    }