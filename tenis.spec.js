function Tennis(){
  this.start = function (){
  }

  this.echo = function (){
    return 'Love - Love';
  }
}


describe("Tennis game", function() {
  it('should be "Love - Love" when starting the game', function() {
    var tennis = new Tennis();
    tennis.start();
    expect(tennis.echo()).toEqual('Love - Love');
  });
});
