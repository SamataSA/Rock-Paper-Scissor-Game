let userScore=0;
let compScore=0;

let ch=document.querySelectorAll(".ch");
let button=document.querySelector("button");

let yourres=document.querySelector("#your-result");
let compres=document.querySelector("#comp-result");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const compChoice=options[Math.floor(Math.random()*3)];
    return compChoice;
};

const playGame=(userChoice)=>{
    console.log("User Choice=",userChoice);
    //Generate Computer Choice
    let compChoice=genCompChoice();
    console.log("Computer Choice: ",compChoice);

    userChoice=userChoice.toLowerCase();

    //score
    if (userChoice===compChoice){
        console.log("Draw Game");
        button.innerText="Draw Game!";
        button.style.backgroundColor="black";
    }

    if ((userChoice==="rock" && compChoice==="paper")||(userChoice==="scissor" && compChoice==="rock")||(userChoice==="paper" && compChoice==="scissor")){
        compScore+=1;
        compres.innerText=compScore;
        console.log("You Lose");
        button.innerText=`You Lose! ${compChoice} beats your ${userChoice}`;
        button.style.backgroundColor="red";
    }

    if ((userChoice==="rock" && compChoice==="scissor")||(userChoice==="paper" && compChoice==="rock")||(userChoice==="scissor" && compChoice==="paper")){
        userScore+=1;
        yourres.innerText=userScore;
        console.log("You Win");
        button.innerText=`You Win!! Your ${userChoice} beats ${compChoice}`;
        button.style.backgroundColor="green";
    }
};

ch.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.classList[0];
        playGame(userChoice);
    });
});
