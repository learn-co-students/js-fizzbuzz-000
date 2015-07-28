'use strict';

var fizzbuzz = function(int){
  if (int % 15 == 0) {
    return "FizzBuzz";
  }
  else if (int % 3 == 0) {
    return "Fizz"
  }
  else if (int % 5 == 0) {
    return "Buzz"
  }
};

 