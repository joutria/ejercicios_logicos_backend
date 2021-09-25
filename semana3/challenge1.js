function countPrimes(n) {
    if(n<=0){
        return 0;
    }
    let root = parseInt(Math.sqrt(n));
    let arr = new Array(n - 1).fill().map((val, index) => { val = index + 2; return val });
    let compare = new Array(root - 1).fill().map((val, index) => { val = index + 2; return val });
    let result = searcher(arr, compare);
    return result.length;
}

function searcher(arr, compare) {
    let result = [];
    for (let i in arr) {
        let mult = 0;
        for (let j in compare) {
            if (arr[i] % compare[j] == 0 && arr[i] != compare[j]) {
                mult++;
            }
        }
        if (mult < 1) {
            result.push(arr[i]);
        }
    }
    return result;
}


module.exports = countPrimes;