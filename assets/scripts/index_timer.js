// set current day and time 
let output = document.getElementById('output');
let numberDate = document.getElementById('date');


let d = new Date();
let day = d.getDay();
let ndate = d.toLocaleString();

switch (day){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5: 
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
output.innerHTML = day;
date.innerHTML = ndate;

//set up the Timer

var start = document.getElementById('start');
var reset = document.getElementById('reset');

var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("sec");

//store a reference to the startTimer variable
var startTimer = null;

start.addEventListener('click', function(){
    //initialize the variable
    function startInterval(){
        startTimer = setInterval(function() {
            timer();
        }, 1000);
    }
    startInterval();
})

reset.addEventListener('click', function(){
    h.value = 0;
    m.value = 0;
    s.value = 0;
    //stop the timer after pressing "reset"
    stopInterval()
})

function timer(){
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0;
        m.value = 0;
        s.value = 0;
    } else if(s.value != 0){
        s.value--;
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    } else if(h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
    }
    return;
}

//stop the function after pressing the reset button, 
//so the time wont go down when selecting a new time after pressing reset
function stopInterval() {
    clearInterval(startTimer);
}




// let message = document.querySelector("h1");
// let message1 = "Come Back after lunch";
// let message2 = "Come Back after dinner";

// // let message = document.getElementById('message');

// function display() {
//     if(h.value == 0 && m.value == 0 && s.value == 0){
//         message.innerHTML = message1;
//     } else {
//         message.innerHTML = message2;
//     }
    
// }

// display();
