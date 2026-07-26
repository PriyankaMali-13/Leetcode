
var TimeMap = function() {
    this.map = {}; 
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.map[key]){
        this.map[key] = [];
    }
    this.map[key].push({value, timestamp});
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    let arr = this.map[key] || "";
    let result = "";
    let left = 0;
    let right = arr.length -1;
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid].timestamp <= timestamp) {
            result = arr[mid].value;
            left = mid+1;
        }
        else right = mid-1;
    }
    return result;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */