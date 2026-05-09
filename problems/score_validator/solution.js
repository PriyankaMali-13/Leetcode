/**
 * @param {string[]} events
 * @return {number[]}
 */
var scoreValidator = function(events) {
    let score = 0;
    let counter = 0;
    for(let i of events){
        if(counter === 10){
            break; 
        }
        else if(i === "W") {
            counter +=1;
        }
        else if(i === "WD"){
            score+=1;
        }
        else if(i === "NB"){
            score+=1;
        }
        else{
            let num = Number(i);
            score+=num;
        }
    }
    return [score,counter];
};