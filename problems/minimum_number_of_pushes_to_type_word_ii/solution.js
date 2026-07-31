/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    //count frequencies
    let dict = {};
    for(let letter of word){
        if(letter in dict){
            dict[letter] +=1;
        }
        else{
            dict[letter] = 1;
        }
    }
    // get values in arr
    let arr = Object.values(dict);

    //sort descending (most frequent first)
    arr.sort((a,b)=> b-a);

    //count pushes
    let pushes = 0;
    for(let i=0; i<arr.length; i++){
        pushes += arr[i] * (Math.floor(i/8) +1);
    }

    return pushes;
};