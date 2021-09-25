function keysAndValues(objInput) {
    //Implementación
    let keys=Object.keys(objInput).sort(),
        values=[];
    for (let i=0; i<keys.length; i++) {
        values.push(objInput[keys[i]])
    }
    return [keys, values];
}

module.exports = keysAndValues;