var elem = document.querySelectorAll(".elem")
var pic =document.querySelector(".elem img")


elem.forEach(function(val){
    val.addEventListener("mouseenter",function(){
    val.childNodes[3].style.opacity=1
    })
     val.addEventListener("mouseleave",function(){
     val.childNodes[3].style.opacity=0
    })
      val.addEventListener("mousemove",function(dets){
        val.childNodes[3].style.left = dets.x+"px"
        val.childNodes[3].style.top = dets.y+"px"
    })
  
})

// elem.addEventListener("mousemove",function(dets){
//     pic.style.left=dets.x+"px"
//       pic.style.top=dets.y+"px"
// })

// elem.addEventListener("mouseenter",function(dets){
//     pic.style.opacity = 1
// })
// elem.addEventListener("mouseleave",function(dets){
//     pic.style.opacity = 0
// })




    