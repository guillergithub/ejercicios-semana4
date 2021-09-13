function minMax(aNumbs) {
    const sortedArr = aNumbs.sort((a, b) => a - b);
    return {min: sortedArr[0], max: sortedArr[sortedArr.length-1]};
}

module.exports = minMax;