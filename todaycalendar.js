function showTime() {
    var date = new Date() ; 
    var h = date.getHours() ;
    var m = date.getMinutes() ;
    var s = date.getSeconds() ;
    var y = date.getFullYear() ;
    var n = date.getMonth() ;
    var d = date.getDate() ;
    var session = "AM" ;

    if(h == 0) {
        h = 12 ;
    }
    if(h > 12) {
        h = h - 12 ;
        session = "PM" ;
    }

    if(n == 0){
        n = "January";
    }
    if(n == 1){
        n = "February";
    }
    if(n == 2){
        n = "March";
    }
    if(n == 3){
        n = "April";
    }
    if(n == 4){
        n = "May";
    }
    if(n == 5){
        n = "June";
    }
    if(n == 6){
        n = "July";
    }
    if(n == 7){
        n = "August";
    }
    if(n == 8){
        n = "September";
    }
    if(n == 9){
        n = "October";
    }
    if(n == 10){
        n = "November";
    }
    if(n ==11){
        n = "December";
    }

    h = (h < 10) ? "0" + h : h ;
    m = (m < 10) ? "0" + m : m ;
    s = (s < 10) ? "0" + s : s ;

    var time = h + ":" + m + ":" + s + " " + session ;
    document.getElementById("MyClockDisplay").innerHTML = time ;
    setTimeout(showTime, 1000) +"<br>" ; 

    var date = d ;

    var month = n ;

    document.getElementById("MyDate").innerHTML = "Today is " + date + ", " + "the 17th of " + n;

}

showTime() ;