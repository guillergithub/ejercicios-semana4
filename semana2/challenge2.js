function divisibleByLeft(n) {
    const numbs = n.toString().split("");
    let result = [];
    numbs.forEach((num, index) => {
      result.push(parseInt(num) % numbs[index-1] === 0)
    })
    return (result);
}


module.exports = divisibleByLeft;