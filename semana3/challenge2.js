function minMax(aNumbs) {
    //Implementación
    if(aNumbs.length>=2){
        return {min:Math.min(...aNumbs), max:Math.max(...aNumbs)};
    }else{
        return false;
    }
}

module.exports = minMax;