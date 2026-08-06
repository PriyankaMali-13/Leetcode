/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
    let number = n;
    while(true){
        if(digitsOfProduct(number) % t == 0){
            return number;
        }
        number++;
    }
};

var digitsOfProduct = function(num){
    let product = 1;
    while(num > 0){
        product *= num%10;
        num = Math.floor(num/10);
    }
    return product;
}

/*
without helper function 

var smallestNumber = function(n, t) {
    let number = n;
    while(true){
        let product = String(number)
            .split('')
            .reduce((acc, d) => acc * Number(d), 1);
        
        if(product % t === 0) return number;
        number++;
    }
};
 */