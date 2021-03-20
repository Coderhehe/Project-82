canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent= "empty";
color= "blue";
canvas.addEventListener("mousedown",mymousedown);
 
function mymousedown(e)
{
mouseevent = "mousedown";

}

canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e)
{
    currentx = e.clientX- canvas.offsetLeft;
    currenty = e.clientY- canvas.offsetTop;

    if (mouseEvent=="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth= 3;
        console.log("Current Position Of X And Y Coordinates");
        console.log("x ="+currentx+"y ="+currenty);
        ctx.arc(currentx,currenty,20,0,2*Math.PI);
    ctx.stroke();
    }
   
}

