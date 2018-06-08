module.exports = function checkAscOrder(numArray) {
  // write your code in here

  var first;

  var second;

  var count = 0;

  for(var i = 0; i<numArray.length; i++){
    count++;

    first = numArray[i];//Set first and second numbers
    
    if(count !== numArray.length){//Stop and return on the last number.
      second = numArray[i+1];
    }
    else
      return flag;

    if(first < second){//If first is smaller, ascendi order and return true
      flag = true;
    }  
    else{//if first is bigger, return false
      flag = false;
      return flag;
    }
  }
  return flag;
}