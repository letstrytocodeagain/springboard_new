

function countdown(number) {
    let intervalId = setInterval(function() {
        number -= 1; 
        if (number > 0) {
            console.log(number);
        } else {
            console.log("DONE!");
            clearInterval(intervalId);  
        }
    }, 1000);
}


function randomGame(){
    let tries = 0; 
    let IntervalId2 = setInterval( function(){
        let randomNum = Math.random();
        tries += 1;  
        console.log(`Try #${tries}: ${randomNum}`);

        if (randomNum > 0.75) {
            clearInterval(IntervalId2);  
            console.log(`It took ${tries} tries to find a number greater than 0.75`);
        }
    }, 1000);


}