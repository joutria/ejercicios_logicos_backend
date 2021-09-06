function arrayOfMultiples(num, length) {
    const x = new Array(length).fill(num).map((_, i) => num * (i + 1));
    return x;
}

module.exports = arrayOfMultiples;