function divisibleByLeft(n) {
    //Implementación
    let number = '' + n,
        array = [false];
    for (let i = 1; i < number.length; i++) {
        if (number[i] % number[i - 1] == 0) {
            array.push(true)
        } else {
            array.push(false)
        }
    }
    return array;
}

module.exports = divisibleByLeft;