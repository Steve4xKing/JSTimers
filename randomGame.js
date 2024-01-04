function randomGame(){
    let counter = 0;
    let time = setInterval(function(){
    let randNum = Math.random(); 
    if (randNum > 0.75){
        counter++;
        clearInterval(time);
        console.log(randNum)
        console.log(`You made it ${counter} random numbers before your number was above .75`);
    } else {
        console.log(randNum);
        counter++;
    }
    }, 1000)
};

randomGame();
