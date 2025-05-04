let leftBtn = document.getElementById('leftBtn');
 let rigthBtn = document.getElementById('rigthBtn');

 let slider = document.getElementById('slider');

let img = document.getElementById('img');
let closeBtn = document.getElementById('closeBtn');

let count = 1;
rigthBtn.onclick = changeImg;


leftBtn.onclick = function(){
    count--;
    if(count < 1) count =4 ;
    img.src = `${count}.png`;

}
function changeImg(){
    count++;
    if(count > 4) count =1 ;
    img.src = `${count}.png`;
}

function  sliderStart(){

    leftBtn.setAttribute("disabled", "disabled");
    rigthBtn.setAttribute("disabled", "disabled");
    changeImg();
}

closeBtn.onclick= function  sliderStop(){
    leftBtn.removeAttribute("disabled");
    rigthBtn.removeAttribute("disabled");
    closeBtn.setAttribute("disabled", "disabled");

 clearInterval(reppet);
    changeImg();
}
let reppet = setInterval(sliderStart,1000)
