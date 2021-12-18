let box1 = document.getElementsByClassName("box")
let box2 = document.getElementsByClassName("box2")
let box3 = document.getElementById("box3")

let box1Name = document.getElementsByName("box_name");


// for(let i = 0; i < box1.length; i++){
//     box1[i].style.animation = `fadeOut 3s ${1 * i}s forwards`;
// }

box1[0].style.animation = "fadeIn 3s forwards";
setTimeout(function(){
    box1[0].style.opacity = 1
    box1[0].style.animation = "fadeOut 3s 1.5s forwards";
},3000)
