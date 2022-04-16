// I started by breaking it down, so I knew I needed functions to perform the maths so I made these first
function sum (a,b){
    return parseFloat(a)+parseFloat(b)
}
// The parse is because it still treating the numbers as a string rather than a number type of data so parse changes it back to a number data type. the float relates to being able to use decimal numbers
function subtract(a,b){
    return parseFloat(a)-parseFloat(b)
}
function multiply(a,b){
    return parseFloat(a)*parseFloat(b)
}
function divide(a,b){
    return parseFloat(a)/parseFloat(b)
}
function squareRoot(a){
    return Math.sqrt (parseFloat(a))
}
// Then I thought about what did I need for someone to use the function, so a prompt followed by an alert using if-else, else if statements.
let maths = prompt("Enter your calculation in the format of number operator number (e.g. 4*5) using the following operators: add(+), subtract(-), multiply(*) divide(/) or square root (sqrt (e.g. sqrt 16))")
// cant have any if else else if statements without some variables...
let add2 = "+"
let subtract2 = "-"
let divide2 = "/"
let multiply2 = "*"
let squareRoot2 = "sqrt"
if(maths.includes(add2)){
    // had to think about what the JS sees things as, the input from the prompt is one whole string so got to break it apart
    let Split = maths.split("+")
    // how will the numbers go through the function? as I have split the string apart I now have an array and that means they are indexed 0,1, so the product of split index 0 and slit index 1 is what needs to go through the function
    let Answer = sum(Split[0],Split[1])
    // time to display the answer
alert(Answer)
} else
    if(maths.includes(subtract2)){
        let Split = maths.split("-")
        let Answer = subtract(Split[0],Split[1])
    alert(Answer)
}else
    if(maths.includes(divide2)){
        let Split = maths.split("/")
        let Answer = divide(Split[0],Split[1])
    alert(Answer)
} else
    if(maths.includes(multiply2)){
        let Split = maths.split("*")
        let Answer = multiply(Split[0],Split[1])
    alert(Answer)
} else
    if(maths.includes(squareRoot2)){
        let Split = maths.split("sqrt")
        let Answer = squareRoot(Split[1])
    alert(Answer)
}else{
    // and a final else in case i typed something unexpected in the prompt
    alert("You did not enter the format correctly. Please use a number operator number combination with the following operators: + - / * Or sqrt number (e.g. sqrt16)")
}