var Works = [
    {
    "title":"Portafolio",
    "type":"Landing Page",
    "img":"resources/portafolio.png",
    "description":`Este es mi portafolio personal, aquí hay algunos de mis trabajos recientes,
    así como información sobre mí, algunas habilidades que tengo y también mis perfiles para que puedas contactarme`,
    "date": "17/10/2022",
    "url": "#home",
    "imgs":[
        "resources/portafolio.png",
        "resources/portafolio2.png",
        "resources/portafolio3.png"
    ]
},
{
    "title":"Corpesa Inmobiliaria",
    "type":"Sitio web Inmobiliaria",
    "img":"resources/corpesa.png",
    "description":`Corpesa Inmobiliaria es una empresa inmobiliaria en la que ponen algunas de sus propiedades,
    terrenos, lotes, etc. al servicio de los usuarios. Este proyecto fue desarrollado con PHP como backend, MYSQL
    en la parte de almacenamiento y tecnologías como HTML, JS y CSS para el frontend. Similarmente,
    Se implementó la sección Dashboard en la que el usuario puede crear, actualizar y eliminar información sobre sus productos.
    Cabe señalar que esta página es responsive.`,
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
    "type":"Sitio web Inmobiliaria",
    "img":"resources/tierra_asesores.png",
    "description":`THR o Tierra Asesores Inmobiliarios es una empresa inmobiliaria,
    el objetivo de este proyecto fue promocionar su terreno de una manera más asertiva, se implementó un filtro de datos,
     así como un Dashboard para que el personal de la empresa pueda crear, actualizar o eliminar información de sus productos.
    Este proyecto fue desarrollado con HTML, CSS y JS para el Frontend y PHP para el Backend.`,
    "date": "15/11/2021",
    "url":"http://www.tierraasesores.com/index.php",
    "imgs":[
        "resources/thr2.png",
        "resources/thr3.png",
        "resources/thr4.png"
    ]    
},
{
    "title":"TarjetasMex",
    "type":"Sitio E-commerce",
    "img":"resources/tarjeta.png",
    "description":`TarjetaMex era un comercio electrónico que se enfocaba en la venta de tarjetas de regalo para cualquier festividad,
    el procesamiento de pagos se implementó a través de PayPal con JavaScript, también tenía una sección en la que los usuarios podían
    personaliza las tarjetas y envía los detalles. vía correo electrónico. Las tecnologías utilizadas para este proyecto fueron HTML, CSS y Js
    para el Frontend y PHP para el backend.`,
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