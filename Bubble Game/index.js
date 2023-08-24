var time = 60
var rn = 0
var score = 0



function incScore(){
    score += 10
    document.querySelector("#scoreValue").textContent = score
}

function makeBubble(){
var clutter = ""

for(i=1; i<=184; i++){
    var randomNumber = Math.floor(Math.random()*10)
    clutter +=` <div class="bubble">${randomNumber}</div>`
}

document.querySelector("#pbtm").innerHTML=clutter
}

function gethits(){
    rn = Math.floor(Math.random()*10)
    document.querySelector("#hitValue").textContent = rn
}

function runtimer(){
    var timer = setInterval(function(){
if(time > 0){
    time--
    document.querySelector("#timeValue").textContent = time
}else{
    clearInterval(timer);
    document.querySelector("#pbtm").innerHTML = 
    `<div id="gameOver">
    <h1>Game Over </h1> 
    <p id='final'>Your final Score is ${score}</p>
    <button onclick="location.reload()">Start Again</button>
    </div>
    `
}
    },1000)
}

document.querySelector("#pbtm").addEventListener("click",function(clk){
    let val = Number(clk.target.textContent)
    if(val === rn){
        incScore()
        makeBubble()
        gethits()
    }else{
        time -=5
    }
})

gethits()
runtimer()
makeBubble()
