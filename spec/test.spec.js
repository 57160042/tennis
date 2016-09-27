funcion fizzbuzz(number){
  return 'Fizz';
}


describe("fizzbuzz()", function() {
  it('should be "Fizz" when I put 3', function() {
    var str = fizzbuzz(3);
    expect(str).toEqual('Fizz');
  });
  it('should be "Buzz" when I put 5', function() {
    var str = fizzbuzz(5);
    expect(str).toEqual('Buzz');
  });
});
