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

  if(~source.indexOf(element)){
    return;
  } else {
    source.push(element);
  }
  return source;
}

module.exports = addToSet;