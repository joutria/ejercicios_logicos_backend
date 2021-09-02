function twoSums(numbs, target) {
    //Implementación
    for(let i = 0; i < numbs.length; i++) {
        for(let j = i; j < numbs.length; j++){
            if (numbs[i]+numbs[j]==target && i!=j){
                return [i, j];
            }
        }
    }
}

module.exports = twoSums;