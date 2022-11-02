let angle1 = document.querySelector(".input-1");
let angle2 = document.querySelector(".input-2");
let buttonCheck = document.querySelector(".button-click")
let output = document.querySelector(".output")


function sumOfAngles(){
    let sum =0;
    sum = Number(angle1.value)+Number(angle2.value)
    console.log(sum)
    if(sum==180){
        output.innerText ="The angle is Triangle"
    }else{
        output.innerText ="The angle is not Triangle"
    }
    
}


buttonCheck.addEventListener("click", sumOfAngles);
