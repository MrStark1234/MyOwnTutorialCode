var a = document.querySelector(".bulb")
var b = document.querySelector("button")
var click = 0
b.addEventListener('click', function(){
    if(click === 0){
        b.innerHTML="Off"
a.style.backgroundColor="yellow"
click = 1
    }else{
         b.innerHTML="On"
        a.style.backgroundColor="transparent"
        click=0
    }

})



