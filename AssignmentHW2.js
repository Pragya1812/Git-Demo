// Function to print power of two numbers.
function power(num1,num2){
  return(Math.pow(num1,num2))
}

var a=4
var b=2
console.log(power(a,b))

//Function to random numbers that are whole numbers.
function randomnum(num1){
  for (let i=0; i <num1; i++){
    console.log(Math.round(Math.random()* 10));
  }
}
randomnum(4)
