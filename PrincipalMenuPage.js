
var matches = /username=([^&#=]*)/.exec(window.location.search);
var param1= matches[1];

document.getElementById("player").innerHTML = "Hello " + param1;



var buttonStartGame = document.getElementById("StartGame");

buttonStartGame.addEventListener("click",function (e) {
    e.preventDefault();
    var color = document.getElementById("body").value;
    var background = document.getElementById("map").value;
    var level =document.getElementById("inputLevel").value;
    localStorage.setItem("color", color);
    localStorage.setItem("back", background);
    localStorage.setItem("level", level);
    localStorage.setItem("name", param1);
    //localStorage.setItem("HS",0);
    window.location.href = "Gamepage.html?";// +
        //"color="+ color+"&color="+color+"&level="+level+"&background="+
       //background;
    //console.log(color+" "+background+" " + level);
});

var buttonBack= document.getElementById("Back");

buttonBack.addEventListener("click",function () {

    window.location.href = "Log_in.html?"
});

var buttonHS = document.getElementById("CelMAiBunScor");
buttonHS.addEventListener("click",function () {

        myVar = setTimeout(alertFunc, 1000);

    function alertFunc() {
        alert("Cel mai tare scor este :"+localStorage.getItem("HS"));
    }
});

