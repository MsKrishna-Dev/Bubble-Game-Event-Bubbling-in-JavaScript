var timer = 60;
var score = 0;
var hitrn; // global variable because, this will use in two functions

function makeBubble(){
    var clutter = "";

    for (var i = 1; i <= 168; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function newHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitinterval").textContent = hitrn;
}

function runTimer(){
    var timerInt = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML = `<h1 >Game Over</h1>`;
        }
    }, 1000);
}

function incScore(){
    score += 10;
    document.querySelector("#incscore").textContent = score;
}

// main event bubble : If bubble don't get the it's event listener, it will go for parent event listener.
document.querySelector("#pbtm").addEventListener("click", function(details){
    // alert("Smooth Run.!")
    // console.log(details.target.textContent);  //this will return a string, not a number. To convert into number, we will use Number() function.
    // console.log(Number(details.target.textContent)); //So in this way, we'll get the clicked bubble number
    var clicknum = Number(details.target.textContent);
    if(clicknum == hitrn){
        incScore();
        makeBubble();
        newHit();
    }

});

makeBubble();

runTimer();

newHit();