function landMass(name, area) {
    const earthMass = 148940000;
    let result = ( area * 100 ) / earthMass;
    return  ({
        message: `${name} representa el ${result.toFixed(2)}% de la masa de la tierra`,
        percent: result
    });
}

module.exports = landMass;