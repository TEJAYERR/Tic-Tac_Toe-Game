let boxes = document.querySelectorAll('.box');
let resetbtn = document.getElementById('reset-btn');
let xscore = document.querySelector('.xscore'); 
let oscore = document.querySelector('.oscore'); 
let container = document.querySelector('.container');
let score = document.getElementsByClassName('score');
let startbtn = document.querySelector('.startbtn')

let x = 0;
let o = 0;

let move= 'player1';   //u can also set true or false for this 


//winning patterns
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];





// for(let i=0;i<boxes.length;i++){
// boxes[i].addEventListener('click',()=>{
//     if(move == 'player1')
//     {
//         boxes[i].innerHTML="<h1>x</h1>";
//         move = 'player2';
//     }
//     else{
//         boxes[i].innerHTML="<h1>o</h1>";
//         move = 'player1';
//     }
// })
// }




//using for each loop
boxes.forEach((box) => {
    box.addEventListener('click',()=>{
        console.log('clicked')
        if(move == 'player1')
        {
            box.innerHTML="<h1>x</h1>";
            score[0].classList.remove('border')
            score[1].classList.add('border')
            move = 'player2';
        }
        else{
            box.innerHTML="<h1>o</h1>";
            score[1].classList.remove('border')
            score[0].classList.add('border')
            move = 'player1';
        }
        box.disabled = true;
        checkWinner();
    });
});
//disable buttons
function disabledbtns(){
    boxes.forEach((box)=>{
        box.disabled =true;
    })
}

//enable buttons
function enablebtns(){
    boxes.forEach((box)=>{
        box.disabled = false;
        box.innerText='';
    })
}




//check winner function
function checkWinner(){
    for(let pattern of winPatterns)
    {
        pos1 = boxes[pattern[0]].innerText;
        pos2 = boxes[pattern[1]].innerText;
        pos3 = boxes[pattern[2]].innerText;

        if(pos1 != '' && pos2 != '' && pos3 !='')
        {
            if(pos1 === pos2 && pos2 === pos3){
                winner(pos1);
                disabledbtns();
            }
        }
    }
}




//winner increase
function winner(score){
    if(score === 'x'){
        xscore.innerText=x+1;
        container.classList.add('animation');
        setTimeout(function() {
            enablebtns();
            container.classList.remove('animation');
        },2200);
    }
    else{
        oscore.innerText=o+1;
        container.classList.add('animation');
        setTimeout(function() {
            enablebtns();
            container.classList.remove('animation');
        },2200);
    }
}


startbtn.addEventListener('click',()=>{
    alert('NewGame starts your scores will be set to "0"');
    enablebtns();
    x=0;
    xscore.innerText=x;
    o=0;
    oscore.innerText=o;
    move='player1';
    score[0].classList.add('border');
    score[1].classList.remove('border');
})



//reset button
resetbtn.addEventListener('click',enablebtns);




