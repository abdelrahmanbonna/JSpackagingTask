import './style.scss';
import pic from'./battlefield_tanks_light_road_smoke_15762_1920x1080.jpg'


function hello(){
    console.log(`hello`)
}

function helloworld(){
    console.log(`hello world`)
}

const img = document.createElement("img");
img.src=pic;
document.body.appendChild(img);