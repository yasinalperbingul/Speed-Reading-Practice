const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
var seconds = 00; 
var tens = 00; 
var appendTens = document.getElementById("tens")
var appendSeconds = document.getElementById("seconds")

var circle = {
    x: canvas.width/6,
    y: canvas.height/6,
    radius :10,
    press: 0
}

var delayInMilliseconds = 300;
function start() {
    tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
    circle.press += 1;
    if(circle.press == 1){
        var i=0;
        interval1 = setInterval(function() {
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

        interval2 = setInterval(startTimer,10);
    }
   
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
    clearInterval(interval1);
    clearInterval(interval2);
    circle.press = 0;
}

function speedUp(){
    delayInMilliseconds = delayInMilliseconds - 50;
    clearInterval(interval1);
    clearInterval(interval2);
    circle.press = 0;
    start();
}

function speedDown(){
    delayInMilliseconds = delayInMilliseconds + 50;
    clearInterval(interval1);
    clearInterval(interval2);
    circle.press = 0;
    start();
}

function startTimer () {
    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  
  }
  