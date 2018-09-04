function FizzBuzz() {}

FizzBuzz.prototype.play = function(num) {
  if (num % 3 == 0) {
    return "Fizz";
  } else { 
    return num;
  }
};

