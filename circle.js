const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

var circle = {
    x: 100,
    y: 100,
    radius : 30
}

var delayInMilliseconds = 1000;
function start() {
    var i=0;
    interval = setInterval(function() {
        myArray = stateCircle(i);
        circle.x = myArray[0];
        circle.y = myArray[1];
        context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI, false);
        context.moveTo(0,0);
        context.clearRect(0,0,800, 800);
        context.fill();
        i++;
        if(i==4){
            i=0;
        }
    }, delayInMilliseconds);
}

function stateCircle(state){
    var position = new Array();

    switch(state){
        case 0:
            position[0] = 200;
            position[1] = 200;
            break;
        case 1:
            position[0] = 600;
            position[1] = 200;
            break;
        
        case 2:
            position[0] = 200;
            position[1] = 600;
            break;

        case 3:
            position[0] = 600;
            position[1] = 600;
            break;
        
        default:
            

    }
    return position;
}

function stop() {
    clearInterval(interval);
}

function speedUp(){
    delayInMilliseconds = delayInMilliseconds - 100;
}

function speedDown(){
    delayInMilliseconds = delayInMilliseconds + 100;
}