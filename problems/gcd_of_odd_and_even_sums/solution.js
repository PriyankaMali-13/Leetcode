/**
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function(n) {
    let a = n*n;
    let b = n * (n+1);
    while(b != 0){
        let temp = b;
        b = a%b;
        a = temp;
    }
    return a;
};

/*
GCD uses the Euclidean algorithm:

GCD(a, b) = GCD(b, a % b)
Keep doing this until b === 0, then a is your GCD.

GCD(a, b):
  while b !== 0:
    temp = b
    b = a % b
    a = temp
  return a
 */