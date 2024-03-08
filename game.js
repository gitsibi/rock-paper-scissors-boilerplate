var score1=document.getElementById("num1");
var score2=document.getElementById("num2");

const hand1 =document.getElementById("hand");
var paperhand1=document.getElementById("paperhand")

const left=document.querySelectorAll("#left")

var rock=document.getElementById("rock");
var paper=document.getElementById("paper");
var scissor=document.getElementById("scissors");

var hand2=document.getElementById("hand2")
var paperhand2=document.getElementById("paperhand2")

var won=document.getElementById("won")
var wons=document.getElementById("wons")
var playagain=document.getElementById("playagain")

var compscore=0;
var playerscore=0;
score1.textContent=playerscore;
score2.textContent=compscore;

function random_hand(){
    operators=Math.round(Math.floor(Math.random()*3));
    if (operators===2){
        paperhand2.src="./assets/"+rock.id+"-hand.png"
    }
    if (operators===0){
        paperhand2.src="./assets/"+scissor.id+"-hand.png"
    }
    if (operators===1){
        paperhand2.src="./assets/"+paper.id+"-hand.png"
    }
}
random_hand()

var playerChoice=""
left.forEach((img) => {
    img.onclick=(e)=>{
        if(e.target.matches("img")){
            paperhand1.src="./assets/"+(e.target.id)+"-hand.png";
            if(e.target.id === "rock"){
                playerChoice ="rock";
            }else if(e.target.id === "paper"){
                playerChoice ="paper";
            }else if(e.target.id === "scissors"){
                playerChoice ="scissors";
            }
            random_hand();
            
            console.log(playerChoice);
            if(playerChoice==="paper"){
                console.log(playerChoice)
                if(operators===2){
                    playerscore=playerscore+1
                    score1.textContent=playerscore;
                }
                else if (operators===0){
                    compscore=compscore+1
                    score2.textContent=compscore;
                }
            }else if(playerChoice==="rock"){
                if(operators===1){
                    compscore=compscore+1
                    score2.textContent=compscore; 
                }
                else if (operators===0){
                    playerscore=playerscore+1
                    score1.textContent=playerscore;
                }
            }else if(playerChoice==="scissors"){
                if(operators===2){
                    compscore=compscore+1
                    score2.textContent=compscore;
                }
                else if (operators===1){
                    playerscore=playerscore+1
                    score1.textContent=playerscore;
                }
            }
            
            if(playerscore===5){
                var buttons = document.getElementsByClassName("buttons");
                won.style.visibility="visible"
                wons.innerHTML="Won"
                playagain.style.visibility="visible"
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].style.visibility = "hidden";
                }
            }else if(compscore===5){
                var buttons=document.getElementsByClassName("buttons");
                won.style.visibility="visible"
                wons.innerHTML="Lose"
                playagain.style.visibility="visible"
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].style.visibility = "hidden";
                }
            }
        }
    }
})

console.log(playerscore)
console.log(compscore)

playagain.onclick=()=>{
    location.href="./game.html"
}