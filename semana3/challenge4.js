function toArray(obj) {
    //Implementación
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    let ans = [];
    for (let i = 0; i < keys.length; i++) {
        ans.push([keys[i], values[i]]);
    }
    return ans;
}

module.exports = toArray;