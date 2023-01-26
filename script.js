
const startButton = document.getElementById( "startButton" );
const stoptButton = document.getElementById( "stopButton"  );
const resetButton = document.getElementById( "resetButton" );

let currentTime = document.getElementById("currentTime");

let seconds = 0;
let ms = 0 
let interval = null;

startButton.onclick = function() {

    console.log("startButton");

    //clear the current interval
    clearInterval(interval); 
    //calls timer function every 10ms
    interval = setInterval(intervalTimer, 10); 
}

stoptButton.onclick = function() {
    //clear the interval, but do not reset the timer values. 
    clearInterval(interval); 
}

/*
* This function called when the reset button is clicked
* it clears the interval and resets the timer.
*/
resetButton.onclick = function() {

    console.log("resetButton");

    //clear the current interval
    clearInterval(interval);  

    //reset the timer values
    seconds = 0;
    ms = 0;
    currentTime.innerHTML = "00:00";
}


function intervalTimer () {
    ms++; 
    if(ms>99){
        seconds++;
        ms=0;
    }
    if(seconds>99){
        seconds=0;
        ms=0;
    }

    if(seconds<10 && ms<10){
        currentTime.innerHTML = "0" + seconds.toString() + ":0" + ms.toString(); 
    }
    else if(ms<10){
        currentTime.innerHTML = seconds.toString() + ":0" + ms.toString(); 
    }
    else if(seconds<10){
        currentTime.innerHTML = "0" + seconds.toString() + ":" + ms.toString(); 
    }
    else{
        currentTime.innerHTML = seconds.toString() + ":" + ms.toString(); 
    }

  }



