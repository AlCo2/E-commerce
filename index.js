let home = document.getElementById("home");
let shop = document.getElementById("shop");
let social = document.getElementById("social");
let about = document.getElementById("about");
let main = document.getElementById("mainimage");


home.classList.add("clicked");
home.onclick = function home() {
    home.classList.add("clicked");
    shop.classList.remove("clicked");
    social.classList.remove("clicked");
    about.classList.remove("clicked");
}
shop.onclick = function(){
    home.classList.remove("clicked");
    shop.classList.add("clicked");
    social.classList.remove("clicked");
    about.classList.remove("clicked");
}
social.onclick = function(){
    home.classList.remove("clicked");
    shop.classList.remove("clicked");
    social.classList.add("clicked");
    about.classList.remove("clicked");
}
about.onclick = function(){
    home.classList.remove("clicked");
    shop.classList.remove("clicked");
    social.classList.remove("clicked");
    about.classList.add("clicked");
}

const imagelist = ["url(https://www.nevillejohnson.co.uk/wp-content/uploads/Sc0379_BoutiqueHotel_116_wg_ig-1.jpg)","url(https://storage.googleapis.com/afs-prod/media/e2640b25c8704405945f7a96d74ad922/3000.jpeg)", "url(https://www.pico-sa.com/wp-content/uploads/2018/09/probadordelujo1-1.jpg)"]

main.style.backgroundImage = imagelist[0];
let i = 0;
function changeimage(){
    main.style.backgroundImage = imagelist[i];
    i++;
    if(i===3){
        i=0;
    }
}
setInterval(changeimage, 4000);