import './style.scss';
import pic from'./battlefield_tanks_light_road_smoke_15762_1920x1080.jpg'


function hello(){
    console.log(`hello`)
}

function helloworld(){
    console.log(`hello world`)
}

const img = document.createElement("img");
const div = document.createElement("div");
const title = document.createElement('h1');
const par = document.createElement('p');
const c = document.createElement('center');
title.innerHTML = "Testing web pack"
par.innerHTML = " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio inventore labore molestiae voluptatem possimus delectus, quos fugiat mollitia! Recusandae iusto perferendis porro? Nisi quisquam natus velit nam saepe aliquid laboriosam. "
img.src=pic;
div.appendChild(img)
c.appendChild(title);
c.appendChild(div);
c.appendChild(par);

document.body.appendChild(c);