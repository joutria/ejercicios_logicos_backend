const reverseString = (str) => {
    //Implementación
    if(typeof str === 'string' && !str.match(/[0-9]/) && str.length>1 && str.length<=15){
        x=str.split('').map((_,i)=>str[(str.length-1)-i]);
    return x.join('');
    }else{
        throw new Error('Invalid argument')
    }
}

module.exports = {
    reverseString
}