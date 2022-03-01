var images = [
    "Playstation_Img/controller.png",
    "Playstation_Img/logo.png",
    "Playstation_Img/menu.png"
]

var i =0;

function setImage()
{
    document.slide.src = images[i];
}

var rightBtn = document.getElementById('right');
rightBtn.addEventListener('click', function(){
    if(i<images.length-1) i++;
    else i=0;
    //console.log(i);
    setImage();
})

var leftBtn = document.getElementById('left');
leftBtn.addEventListener('click', function(){
    if(i>0) i--;
    else i=images.length-1;
    //console.log(i);
    setImage();
})

var time = 2000;
function slideImage()
{
    if(i<images.length-1) i++;
    else i=0;
    setImage();
    setTimeout('slideImage()', time);
}
window.onload=slideImage;

//Note: inspect, console: shows the syntax errors!
