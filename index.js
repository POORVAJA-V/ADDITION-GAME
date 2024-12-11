let num1=document.getElementById("firstNumber");
let num2=document.getElementById("secondNumber");
let userinput=document.getElementById("userInput");
let para=document.getElementById("gameResult");

let randomnumber1=parseInt(num1);
let randomnumber2=parseInt(num2);
let result=randomnumber1 + randomnumber2; 
function checkButton(){
    let first=parseInt(num1.textContent);
    let second=parseInt(num2.textContent);
    let input=parseInt(userinput.value);
    let result=first+second;
     
    if (input ===result){
        para.textContent="Congratulations! You got it right.";
        para.style.backgroundColor="#028a0f";
    }
    else{
        para.textContent="Please Try Again!";
        para.style.backgroundColor="#1e217c";
    }
 }
 
function restartButton(){
    let first=Math.ceil(Math.random()*100);
    num1.textContent=first;
    let second=Math.ceil(Math.random()*100);
    num2.textContent=second;
    para.textContent="";
    userinput.value="";
}
restartButton();