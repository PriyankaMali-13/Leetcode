/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe : function (another){
            if(val === another) return true; 
            else throw new Error("Not Equal")
        },
        notToBe : function(another){
            if( !(val === another)) return true; 
            else if(val === another) throw new Error("Equal");
            else throw new Error("Not Equal")
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */