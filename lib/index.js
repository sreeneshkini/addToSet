'use strict'
/**
 *  Description: It will mutate the source array and return the modified array 
 *  @param Array
 *  @param Element 
 *  return Array 
 */
function addToSet(){}

addToSet.prototype.push = function(source, element){
  if(!Array.isArray(source)){
    throw 'Error: Source Object must be an Array';
  }
  let cloned = source.slice();
  if(~cloned.indexOf(element)){
    return;
  } else {
    cloned.push(element);
  }
  return cloned;
}

module.exports = addToSet;