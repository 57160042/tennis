
function Tennis(){

  var ScoreA ;
  var ScoreB ;

  this.start = function(){
    ScoreA = 0;
    ScoreB = 0;
  }

  this.PlayerGetScoreA = function(){


      if(ScoreA === 30 ){
               ScoreA+=10;
      }
      if(ScoreA == 40 ){
               ScoreA = 'win';
      }
      else {
                ScoreA+=15;
      }

   }


 this.PlayerGetScoreB = function(){

     if(ScoreB === 30 ){
               ScoreB+=10;
      }
      if(ScoreB == 40 ){
               ScoreB = 'win';
      }
      else {
                ScoreB+=15;
      }

  };




this.echo = function(){

       if( ScoreA === 0 && ScoreB === 0){
              return 'Love - Love';
        }

        else if( ScoreA === 0 && ScoreB === 15){
              return 'Love - Fifteen';
        }

        else if( ScoreA === 0 && ScoreB === 30){
              return 'Love - Forty';
        }

        else if( ScoreA === 'win'){
               return 'PlayerB Win';
        }

       else if( ScoreA === 15 && ScoreB === 0){
               return 'Fifteen - Love';
        }

       else if( ScoreA === 30 && ScoreB === 0){
                return 'Thirty - Love';
        }

       else if( ScoreA === 40 && ScoreB === 0){
                return 'Forty - Love';
        }

        else if( ScoreA === 15 && ScoreB === 15){
                return 'Fifteen - Fifteen';
        }

        else if( ScoreA === 30 && ScoreB === 30){
                return 'Forty - Forty';
        }

        else if( ScoreA === 'win' ){
                return 'playerA Win';
        }
};

}

describe("Tennis game", function() {
  var tennis = new Tennies();
  it('should be 0-0 "Love - Love" when starting the game', function() {
    tennis.start();
    expect(tennis.echo()).toEqual('Love - Love');
  });

  it('should be 15-0 "Fifteen - Love" when starting the game', function() {
    tennis.PlayerGetScoreA();
    expect(tennis.echo()).toEqual('Fifteen - Love');
  });

  it('should be 30-0 "Thirty - Love" when starting the game', function() {
    tennis.PlayerGetScoreA();
    expect(tennis.echo()).toEqual('Thirty - Love');
  });

  it('should be 40-0 "Forty - Love" when starting the game', function() {
    tennis.PlayerGetScoreA();
    expect(tennis.echo()).toEqual('Forty - Love');
  });

});
