function countDown (num){
    let timer = setInterval(function (){
        if (num <= 0){
            clearInterval(timer);
            console.log('DONE!');
        }else{
            console.log(num)
        }
        num -- 
    }, 1000)
};



countDown(4);