function landMass(name, area) {
    //Implementación
    const areatotal=148940000/100;
    const ans = {"percent":+(area/areatotal).toFixed(2), "message": `${name} representa el ${(area/areatotal).toFixed(2)}% de la masa de la tierra`}

    return ans;
}

module.exports = landMass;