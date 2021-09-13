function countPrimes(number) {    
    const findPrime = (number) => {
      for (let i=2; i<number; i++) {          
        if (number % i === 0) return false;
      }     
      return true;
    }
    let count = 0;  
    
    if (number < 0) return 0;
    if (number === 1) return 1;
    
    for(let j=2; j<number; j++) {
      if (findPrime(j)) count++
    };
    return count;
    
  }

module.exports = countPrimes;