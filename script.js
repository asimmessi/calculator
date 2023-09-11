
const allBtns=[...document.getElementsByClassName("btn")];
console.log(allBtns);

let strToDisplay="";

const displayElm=document.querySelector(".display");
console.log(displayElm)


const audio= new Audio("./audio.mp3");


const operators=["+", "-", "*", "%", "/"];

let lastOperator="";

allBtns.forEach((buttons)=>{

    buttons.addEventListener("click", ()=>{

        displayElm.style.background="";
        displayElm.style.color="";
        displayElm.classList.remove("prank");

        const val=buttons.innerText;


        if (val==='AC'){
            strToDisplay="";
            display(strToDisplay);
            return;
        }

        if (val==='C'){
            strToDisplay=strToDisplay.slice(0, -1); //if you want to delete last item
            return display(strToDisplay);
        }

        if(val==="="){
            return total();
        }

        if (operators.includes(val)){
            lastOperator= val;
            const  lastChar= strToDisplay[strToDisplay.length-1];

            if(operators.includes(lastChar)){
                strToDisplay=strToDisplay.slice(0, -1);
            }
        }

        if(val==="."){
            const indexOfLastOperator= strToDisplay.lastIndexOf(lastOperator);
            const lastNumberSet= strToDisplay.slice(indexOfLastOperator);

            if(lastNumberSet.includes(".")){
                return;
            }

            if(!lastOperator && strToDisplay.includes(".")){
                return;
            }
        }

        strToDisplay+=val;
        display(strToDisplay);
    });
});

const display=(str)=>{
    displayElm.innerText=str||"0.00";
}

const total=()=>{
    const extraVal= randomNumber();

    if(extraVal){
        audio.play();
        displayElm.style.background="red";
        displayElm.style.color="white";
        displayElm.classList.add("prank");
    }

    const ttl = eval(strToDisplay);
    display(ttl + extraVal);
    strToDisplay= ttl.toString();
}

const randomNumber=()=>{
    const num= Math.round(Math.random()*10);
    return num<3? num : 0;
}