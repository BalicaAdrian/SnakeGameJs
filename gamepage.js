var canvas = document.getElementById("game");
var context = canvas.getContext('2d');

// var name1 = /username=([^&#=]*)/.exec(window.location.search);
// var param0= name1[1];
//var param = document.getElementById("param");
// var name = /username=([^&#=]*)/.exec(window.location.search);
// var param1= name[1];
// var color = /color=([^&#=]*)/.exec(window.location.search);
// var param2= color[1];
//
// var level = /level=([^&#=]*)/.exec(window.location.search);
// var param4= level[1];
// var background = /background=([^&#=]*)/.exec(window.location.search);
// var param3= background[1];
// const params = new URL(location.href).searchParams;
// const  param0= params.get('color');
// const  param2= params.get('username');
// const  param3= params.get('level');
// param.innerHTML=param0 +" "+ param2 +" "+ param3+" ";


var videoPlace = document.getElementById("video");
var video = document.createElement("video");
video.src = "videoSnake.mp4";
video.autoplay = true;
video.height = 300;
video.width = 500;
video.controls="controls";
videoPlace.appendChild(video);

var placeSongs = document.getElementById('song');
var songs= document.createElement("audio");
songs.src= "Vivaldi Autumn The Four Seasons High Quality.mp3";
songs.type = "audio/mpeg";
songs.id="audio-player";
songs.controls='controls';
placeSongs.appendChild(songs);


var mycolor = localStorage.getItem("color");
var back = localStorage.getItem("back");
var Levell = localStorage.getItem("level");
var name = localStorage.getItem("name");

var colors={
    color: mycolor,
    background: back,
    level: Levell,
    nume: name
};

var caracteristici=[];
caracteristici.push(colors);
console.log(caracteristici[0].background);

var myVar= null ;
var buttonStop = document.getElementById("StopTime");
var check = false;
buttonStop.addEventListener("click",function () {
    if(check === false) {
        myVar = setInterval(myTimer, 1000);
        console.log(" merge");
        check = true;
    }
    else if(check === true) {
        clearInterval(myVar);
        check = false;
        console.log("Nu merge");
    }
});




function myTimer() {
    console.log(check);
    if(check === true) {
        var data = new Date();
        var time = data.toLocaleTimeString();
        document.getElementById("Time").innerHTML = time;
    }
}



canvas.style.backgroundColor = caracteristici[0].background;
console.log(mycolor+" "+ back+" "+ Levell+ " "+ name);




var Score = 0;

var grid = 16;
var count = 0;

var snake ={
    x: 160,
    y: 160,

    dx: grid,
    dy: 0,

    cells: [],
    maxCells: 4
};

var apple={
    x:320,
    y:320
};

function getRandomNumber(min,max) {
    return Math.floor(Math.random()*(max-min) + min)
}

//game progress

// var setLevel ;
//
// console.log(Levell);
// if(Levell === 1){
//
//     window.setLevel = 2
// }
// if(Levell === 2){
//     window.setLevel = 3
// }
// if(Levell === 3){
//
//     window.setLevel = 5
// }
// var x = setLevel;
// console.log(setLevel);
function game(){
    requestAnimationFrame(game);

    if(parseInt(Levell) === 1) {
        if (++count < 5) {
            return
        }
    }
    if(parseInt(Levell) === 2) {
        if (++count < 4) {
            return
        }
    }
    if(parseInt(Levell) === 3) {
        if (++count < 3) {
            return
        }
    }
    count = 0;

    context.clearRect(0,0, canvas.width, canvas.height);

    snake.x += snake.dx;
    snake.y += snake.dy;


    if(snake.x <0){
        snake.x = canvas.width - grid;
    }
    else if(snake.x >= canvas.width){
        snake.x = 0;

    }

    if(snake.y <0){
        snake.y = canvas.height - grid;
    }
    else if(snake.y >= canvas.height){
        snake.y = 0;

    }

    snake.cells.unshift({x:snake.x, y:snake.y});

    if(snake.cells.length > snake.maxCells){
        snake.cells.pop();
    }

    //desenam marul

    context.fillStyle= 'red';
    context.fillRect(apple.x,apple.y, grid-1,grid-1);

    //desenam sarpele

    context.fillStyle = mycolor;
    snake.cells.forEach(function (cell,i) {
        context.fillRect(cell.x,cell.y, grid-1, grid-1);

        if(cell.x === apple.x && cell.y === apple.y){
            snake.maxCells++;

            if(parseInt(Levell) === 1)
                Score=Score+ 1;
            if(parseInt(Levell) === 2)
                Score=Score+ 2;
            if(parseInt(Levell) === 3)
                Score=Score+ 3;

            var BestScore = localStorage.getItem("HS");
            if( Score > BestScore){
                localStorage.setItem("HS",Score);
            }


            apple.x=getRandomNumber(0,25)*grid;
            apple.y=getRandomNumber(0,25)*grid;

        }

        for( var j = i +1 ;j< snake.cells.length; j++){
            if(cell.x === snake.cells[j].x && cell.y === snake.cells[j].y ){

                alert("Congrats you done a really great job "+ name +"\n"+ "you got "+ Score + " points");
                window.location.href = "PrincipalMenu.html?username="+name;

                snake.x = 160;
                snake.y= 160;
                snake.cells= [];
                snake.maxCells = 4;
                snake.dx = grid;
                snake.dy = 0;

                Score = 0;

                apple.x=getRandomNumber(0,25)*grid;
                apple.y=getRandomNumber(0,25)*grid;
            }



        }
    });

    document.addEventListener('keydown',function (e) {
        //stanga

        if(e.which === 37 && snake.dx === 0){
            snake.dx = -grid;
            snake.dy = 0;

        }
        //sus
        if(e.which === 38 && snake.dy ===0){
            snake.dx = 0;
            snake.dy = -grid;

        }
        //dreapte
        if(e.which === 39 && snake.dx ===0){
            snake.dx = grid;
            snake.dy = 0;
        }
        //jos
        if(e.which === 40 && snake.dy ===0){
            snake.dx = 0;
            snake.dy = grid;
        }

    });
   // var name = /username=([^&#=]*)/.exec(window.location.search);
    //var param1= name[1];
    var displayScore=document.getElementById("Score");
    displayScore.innerHTML = "Score " + Score;

    paragraph.innerHTML = localStorage.getItem("HS");

}

var HighScore = document.getElementById("HighScore");
var paragraph = document.createElement("span");
HighScore.appendChild(paragraph);
requestAnimationFrame(game);


caracteristici=[];













