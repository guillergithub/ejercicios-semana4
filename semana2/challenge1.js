function twoSums(numbs, target) {
  let result = [];
  if (numbs.length < 3) return [0, 1];
  for (let i=0; i < numbs.length; i++) {
    for(let j=1; j < numbs.length; j++)  {
      if(numbs[i] + numbs[j] === target && i !== j) {
        result.push(i);
        result.push(j);
         return result;
      };
    };
  };
};

module.exports = twoSums;