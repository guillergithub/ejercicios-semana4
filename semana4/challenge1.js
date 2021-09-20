function keysAndValues(objInput) {
  let orderedKeys = Object.keys(objInput).sort(), values = [];
  orderedKeys.forEach(elem => values.push(objInput[elem]));          
  return ([orderedKeys, values]);
};
module.exports = keysAndValues;