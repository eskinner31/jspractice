//This function should predict the next number in the sequence
var testArray = [1,2,4,8,16,32];

var nextInSequence = function(arr){
  var i = 0,
  result = 0;
  while (i < arr.length){
    result = Math.pow(2,i+1);
    i++;
  }
  return result;
}

console.log(nextInSequence(testArray));
