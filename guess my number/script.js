'use strict';



let secretnumber =Math.trunc(Math.random()*40+1);

let score=10;
let highscore=0;

document.querySelector('.check').addEventListener('click',function(){
const guess =Number(document.querySelector('.guess').value);

if(!guess){
    document.querySelector('.message').textContent='⛔ No Number!';

}
else if(guess===secretnumber){
    document.querySelector('.message').textContent='🎉 Correct Number!';
    document.querySelector('.number').textContent=secretnumber;

    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width='30rem'
   if(score>highscore){
   highscore=score;
    document.querySelector('.highscore').textContent=highscore;

   }

}
else if(guess>secretnumber){
    if(score>1){
    document.querySelector('.message').textContent='📈 Too High!';
    score--; 
    document.querySelector('.score').textContent=score;
    }else{
        document.querySelector('.message').textContent='👾 Game over';
        document.querySelector('.score').textContent=0;

    }
}
else if(guess<secretnumber){
    if(score>1){
        document.querySelector('.message').textContent='📉 Too Low!';
        score--; 
        document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.message').textContent='👾 Game over';
            document.querySelector('.score').textContent=0;
    
        }
  
}
});


document.querySelector('.again').addEventListener('click',function(){
    
    score=10;
    secretnumber =Math.trunc(Math.random()*40+1);
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').textContent='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem'



});
















