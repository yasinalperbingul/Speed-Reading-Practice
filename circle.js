const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

var circle = {
    x: 100,
    y: 100,
    radius :10
}

var delayInMilliseconds = 300;
function start() {
    var i=0;
    interval = setInterval(function() {
        myArray = stateCircle(i);
        circle.x = myArray[0];
        circle.y = myArray[1];
        context.beginPath();
        context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI, false);
        context.moveTo(0,0);
        context.closePath();
        context.clearRect(0,0,600, 600);
        context.fill();
        i++;
        if(i==4){
            i=0;
        }
        console.log(delayInMilliseconds);
    }, delayInMilliseconds);
}

function stateCircle(state){
    var position = new Array();

    switch(state){
        case 0:
            position[0] = canvas.width/4;
            position[1] = canvas.height/4;
            break;
        case 1:
            position[0] = (canvas.width/4)*3;
            position[1] = canvas.height/4;
            break;
        
        case 2:
            position[0] = canvas.width/4;
            position[1] = (canvas.height/4)*3;
            break;

        case 3:
            position[0] = (canvas.width/4)*3;
            position[1] = (canvas.height/4)*3;
            break;
        
        default:
            

    }
    return position;
}

function stop() {
    clearInterval(interval);
}

function speedUp(){
    delayInMilliseconds = delayInMilliseconds - 50;
    clearInterval(interval);
    start();
}

function speedDown(){
    delayInMilliseconds = delayInMilliseconds + 50;
    clearInterval(interval);
    start();
}