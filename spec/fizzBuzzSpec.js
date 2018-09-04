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

});