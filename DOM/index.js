// Bulb Code--------------------------------------------------------

// var a = document.querySelector(".bulb")
// var b = document.querySelector("button")
// var click = 0
// b.addEventListener('click', function(){
//     if(click === 0){
//         b.innerHTML="Off"
// a.style.backgroundColor="yellow"
// click = 1
//     }else{
//          b.innerHTML="On"
//         a.style.backgroundColor="transparent"
//         click=0
//     }

// })


// Add Friend Code---------------------------------------------------

var istatus = document.querySelector("h5")
var btn = document.querySelector("#addBtn")
var pic = document.querySelector("#pic")
var love = document.querySelector("#love")
var love2 = document.querySelector("#love2")

var stat = 0
var lstat = 0

btn.addEventListener("click",function(){
    if(stat === 0){
        istatus.innerHTML ="Friend"
        istatus.style.color = "green"
    btn.style.backgroundColor = "rgb(148, 150, 151)"
    btn.style.color = "black"
    btn.innerHTML = "Remove Friend"
        stat = 1
    }else{
        istatus.innerHTML ="Starnger"
        istatus.style.color = "rgb(184, 7, 7)"
        btn.style.backgroundColor = "cadetblue"
            btn.innerHTML = "Add Friend"
        stat = 0
    }
})
pic.addEventListener("dblclick", function(){
    love.style.transform="translate(-50%,-50%) scale(1)"
    love.style.opacity="1"
    love.style.color = "red"
    love2.style.color = "red"

     setTimeout(() => {
        love.style.opacity="0"
    }, 1000);

    setTimeout(() => {
        love.style.transform="translate(-50%,-50%) scale(0)"
    }, 1500);
})

love2.addEventListener("click",function(){
   if(lstat === 0){
    love2.style.color = "red"
    lstat = 1
   }else{
    love2.style.color = "white"
    lstat = 0
   }
})


