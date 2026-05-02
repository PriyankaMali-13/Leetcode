var createCounter = function(init) {
    let current = init;  // track current value separately

    return {
        increment: function() {
            return ++current;  // return the updated value
        },
        decrement: function() {
            return --current;  // return the updated value
        },
        reset: function() {
            current = init;    // reset to original init, not 0
            return current;    // return the updated value
        }
    };
};