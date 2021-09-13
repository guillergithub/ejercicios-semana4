function toArray(obj) {
    let result = [];
     for(elem in obj) {
       let arrElem = [];       
       arrElem.push(elem);
       arrElem.push(obj[elem]);
       result.push(arrElem);
     };
    return result;
  };

module.exports = toArray;