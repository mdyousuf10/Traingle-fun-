let angle1 = document.querySelector("#angle-1")
let angle2 = document.querySelector("#angle-2")
let CheckButton = document.querySelector(".submit-btn")
let output = document.querySelector(".output")

CheckButton.addEventListener('click', function calculateHypotenuse(){
    let a= angle1.value;
    let b= angle2.value
    let sumofSqur = a*a + b*b;
    let hypotenuse = Math.sqrt(sumofSqur);
    output.innerText = "The Hypotenuse of square is " + hypotenuse;

})
