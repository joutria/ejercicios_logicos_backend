const capitalizeLetters = (str) => {
    //Implementación
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return str.split(' ').map(capitalize).join(' ');
}

module.exports = {
    capitalizeLetters
}