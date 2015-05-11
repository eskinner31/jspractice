//this lists all of the numbers in the array.
var testArrayOne = [1,2,3,4,5];

var logAll = function (arr){
  var i = 0;
  var result = "";
  while (i < arr.length){
    result = result + " " + arr[i];
    i++;
  }
  return result;
}
console.log(logAll(testArrayOne));

// This performs the sum operation.
var testArrayTwo = [1, 2, 3];

var sum = function (arr){
  var i = 0;
  var result = 0;
  while (i < arr.length){
    result = result + arr[i];
    i++;
  }
  return result;
}

console.log(sum(testArrayTwo));

// This performs the subtraction operation.
var testArrayThree = [10,10,10];

var subtract = function (arr){
  var i = 0;
  var result = 0;
  while (i < arr.length){
    result = result - arr[i];
    i++;
  }
  return result;
}

console.log(subtract(testArrayThree));

// This segment will find the largest number in the array.
  var testArrayThree = [1,9,7];

  var largest = function(arr){
    var i = 0;
    var result = 0;
    while (i < arr.length){
      if (arr[i] > result){
        result = arr[i];
      }
      i++;
    }
    return result;
  }

  console.log(largest(testArrayThree));

  //This Segment will find the smallest number in the array.

  var testArrayFour = [20,19,40];

  var smallest = function(arr){
    var i = 0;
    var result = arr[0];
    while (i < arr.length){
      if (arr[i] < result){
        result = arr[i];
      }
      i++;
    }
    return result;
  }
console.log(smallest(testArrayFour));

//This segment will find the average of all of the numbers in the array.
var testArrayFive = [10,20,30];

var average = function(arr){
  var i = 0;
  var result = 0;
  while (i < arr.length){
    result = result + arr[i];
    i++;
  }
  result = (result/arr.length);
  return result;
}

console.log(average(testArrayFive));
