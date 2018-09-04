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
    }); 
  });


});