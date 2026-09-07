/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    for(let w = Math.floor(Math.sqrt(area)); w>=1; w--){
        if(area % w === 0){
            let l = area/w;
            return [l, w];
        }
    }
};