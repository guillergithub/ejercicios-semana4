function isSpecialArray (specialArr) {
  let isEspecial = true;  
  for (let i=0; i<specialArr.length; i++) {
    if (i % 2 === 0 && specialArr[i] % 2 !== 0) isEspecial = false;  
  };   
  return isEspecial;
};

module.exports = isSpecialArray;