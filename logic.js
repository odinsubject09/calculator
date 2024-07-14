//global variables
let oldResult=0;
let newResult=0;
let presentNumber=0;
let presentSign="+";
let roughText=document.querySelector(".roughText");
let finalSum=document.querySelector(".finalSum");
const special1Buttons=document.querySelectorAll(".special1");//all buttons except = and AC
const equals=document.querySelector(".equals");
const AC=document.querySelector(".AC");
const signs=document.querySelectorAll(".sign");//+,-,*,/
const numbers=document.querySelectorAll(".number");
let negativeNumber=false;
let visited=true;
const buttons=document.querySelectorAll("button");
//updating roughtext
special1Buttons.forEach(button=>{
    button.addEventListener("click",()=>{
    roughText.textContent+=button.textContent;
});
});
//clickevent:'='
equals.addEventListener("click",()=>{
    roughText.textContent=""+(newResult);
    finalSum.textContent=""+(newResult);
});
//clickevent:'AC'
AC.addEventListener("click",()=>{
    roughText.textContent="";
    finalSum.textContent="0";
    oldResult=0;
    newResult=0;
    presentSign="+";
    presentNumber=0;
    negativeNumber=false;
});
//clickevent:arithmetic signs
signs.forEach(sign=>{
    sign.addEventListener(("click"),()=>{
        if((presentSign==="/"||presentSign==="x")&&(sign.textContent==="-")&&!visited)
            negativeNumber=true;
        else if(!visited)
            alert("ja apna khwaish pura kr le");
        else
        {
            presentSign=sign.textContent;
            negativeNumber=false;
        }
        oldResult=newResult;
        presentNumber=0;
        visited=false;
    });
});
//clickevent:numbers
numbers.forEach(number=>{
    number.addEventListener(("click"),()=>{
        if(negativeNumber)
            presentNumber=presentNumber*10-Number(number.textContent);
        else
            presentNumber=presentNumber*10+Number(number.textContent);
        newResult=calculate(oldResult,presentNumber,presentSign);
        finalSum.textContent=""+(newResult); 
        visited=true;   
    });
});
//calculate function
function calculate(result,presentNumber,presentSign)
{
    if(presentSign==="+")
        result+=presentNumber;
    if(presentSign==="-")
        result-=presentNumber;
    if(presentSign==="x")
        result*=presentNumber;
    if(presentSign==="/")
    {
        if (presentNumber !== 0) {
            result /= presentNumber;
            result = Math.round(result * 10) / 10; // Rounds to one decimal place
        } else {
            // Handle division by zero or other errors
            alert("rulayega kya");
        }
    }
    return result;
}
buttons.forEach(button=>{
    button.addEventListener("mousedown",()=>{
        changeColor(button);
    });
    button.addEventListener("mouseup",()=>{
        button.style.backgroundColor=`white`;
    });
});
//colours
function changeColor(item)
{
    let rrandom=Math.floor(Math.random()*256);
    let brandom=Math.floor(Math.random()*256);
    let grandom=Math.floor(Math.random()*256);
    let color=`rgb(${rrandom},${brandom},${grandom})`;
    item.style.backgroundColor=color;
}



