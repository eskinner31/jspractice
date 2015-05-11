//This function should take in a number an list all of the Fibonacci numbers up to it.
var fibArray = [1,1];
var result = fibArray[0];
var fibonacci = function(arr, x){
  for (var i = 2; arr[i-1] <= x; i++)
  {
      arr[i] = arr[i-1] + arr[i-2];
      result = result + " " + arr[i-1];
  }
  return result;
}

console.log(fibonacci(fibArray, 50));
