const allBtns=[...document.getElementsByClassName("btn")];
console.log(allBtns);

let strToDisplay="";

const displayElm=document.querySelector(".display");
console.log(displayElm)

const operators=["+", "-", "*", "%", "/"];

allBtns.forEach((x)=>{

    x.addEventListener("click", ()=>{
        const val=x.innerText;


        if (val==='AC'){
            strToDisplay="";
            display(strToDisplay);
            return;
        }

        if (val==='C'){
            strToDisplay=strToDisplay.slice(0, -1);
            return display(strToDisplay);
        }

        if(val==="="){
            return total();
        }

        if (operators.includes(val)){
            const  lastChar= strToDisplay[strToDisplay.length-1];

            if(operators.includes(lastChar)){
                strToDisplay=strToDisplay.slice(0, -1);
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
    const ttl=eval(strToDisplay)
    display(ttl);
    strToDisplay= ttl.toString();
}


