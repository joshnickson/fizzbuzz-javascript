describe("FizzBuzz", function() {

  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  describe("normal numbers", function() {
    it("should output the number", function(){
      expect(fizzbuzz.play(1)).toEqual(1)
    }); 
  });

  describe("multiples of 3", function() {
    it("should output Fizz", function(){
      expect(fizzbuzz.play(3)).toEqual("Fizz")
      expect(fizzbuzz.play(12)).toEqual("Fizz")
      expect(fizzbuzz.play(369)).toEqual("Fizz")
    }); 
  });

  describe("multiples of 5", function() {
    it("should output Fizz", function(){
      expect(fizzbuzz.play(5)).toEqual("Buzz")
      expect(fizzbuzz.play(25)).toEqual("Buzz")
      expect(fizzbuzz.play(80)).toEqual("Buzz")
    }); 
  });


});