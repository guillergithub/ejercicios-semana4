function mcm (a, b) {  
  const getMaxCommomDivisor = (a, b) => {
    let savedB = 0;
    while(b !== 0) {
      savedB = b;
      b = a % b;
      a = savedB;
    } 
    return a;
  } 

  return (a * b) / getMaxCommomDivisor(a, b)
  
}

module.exports = mcm;