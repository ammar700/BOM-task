
// set time out section

window.addEventListener("scroll" , colorChange)

var navbar = document.querySelector(".navbar");
var finalResult = window.scrollY;
function colorChange(){
    if(finalResult < 300){
        navbar.classList.remove('navcolorR');
    }else{  
        navbar.classList.add('navcolorR');
    }
}


// ================================================================================0==================================================================================
// ================================================================================0==================================================================================
// ================================================================================0==================================================================================

// set time out section

function myTime(){
    alert("say my name");
}




// ================================================================================0==================================================================================
// ================================================================================0==================================================================================
// ================================================================================0==================================================================================

// set interval section 

var myDate = setInterval(tiimer , 1000)

function tiimer(){
    var date = new Date();
    document.querySelector("#demoo").innerHTML = date.toLocaleTimeString();
}