var number = 0;
var stopped = true;
var t;

function updatenum() {

    number = Math.floor(Math.random() * 10) + 1;
    document.getElementById("numlabel").textContent = number;
}    

function randonum() {

    if(stopped) {
        stopped = false;
        t = setInterval(updatenum, 10);
    }
    else {
       even()
    }
}    

function even() {

    if(number % 2 === 0) {
        clearInterval(t);
        stopped = true;
    }
    else {
        alert("This is not a even number. Choose a even number.")
    }
}

window.onload = function() {
    document.getElementById("numlabel").textContent = "0";
    //Note : This part is generated by chatGPT as the code was not wrking properly if shuffing was not prevent.//
}
