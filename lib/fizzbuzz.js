'use strict';

var fizzbuzz = function(value){
  if (value % 3 == 0) {
    return "Fizz";
  } else if (value % 5 == 0) {
    return 'Buzz';
  } else if (value % 15 == 0) {
    return 'FizzBuzz';
  }
};