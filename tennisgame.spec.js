
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
      else {
                ScoreA+=15;
      }

   }


 this.PlayerGetScoreB = function(){

     if(ScoreB === 30 ){
               ScoreB+=10;
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
              return 'Love - Thirty';
        }

        else if( ScoreA === 0 && ScoreB === 40){
              return 'Love - Forty';
        }

        else if( ScoreB === 55 ){
               return 'playerB Win';
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
                return 'Thirty - Thirty';
        }

        else if( ScoreA === 55 ){
                return 'playerA Win';
        }
};

}

describe("Tennis game", function() {
  var tennis = new Tennis();
  it('should be 0-0 "Love - Love" when starting the game', function() {
    tennis.start();
    expect(tennis.echo()).toEqual('Love - Love');
  });

  it('should be 0-15 "Love - Fifteen" when A=0,B=15', function() {
    tennis.PlayerGetScoreB();
    expect(tennis.echo()).toEqual('Love - Fifteen');
  });

  it('should be 0-30 "Love - Thirty" when A=0,B=30', function() {
    tennis.PlayerGetScoreB();
    expect(tennis.echo()).toEqual('Love - Thirty');
  });

  it('should be 0-40 "Love - Forty" when A=0,B=40', function() {
    tennis.PlayerGetScoreB();
    expect(tennis.echo()).toEqual('Love - Forty');
  });

  it('should be  "playerB Win" when playerB Win', function() {
    tennis.PlayerGetScoreB();
    expect(tennis.echo()).toEqual('playerB Win');
  });

  it('should be 15-0 "Fifteen - Love" when A=15,B=0', function() {
    tennis.start();
    tennis.PlayerGetScoreA();
    expect(tennis.echo()).toEqual('Fifteen - Love');
  });

  it('should be 30-0 "Thirty - Love" when A=30,B=0', function() {
    tennis.PlayerGetScoreA();
    expect(tennis.echo()).toEqual('Thirty - Love');
  });

  it('should be 40-0 "Forty - Love" when A=40,B=0', function() {
    tennis.PlayerGetScoreA();
    expect(tennis.echo()).toEqual('Forty - Love');
  });

  it('should be  "playerA Win" when playerA Win', function() {
    tennis.PlayerGetScoreA();
    expect(tennis.echo()).toEqual('playerA Win');
  });

  it('should be 15-15 "Fifteen - Fifteen" when A=15,B=15', function() {
    tennis.start();
    tennis.PlayerGetScoreA();
    tennis.PlayerGetScoreB();
    expect(tennis.echo()).toEqual('Fifteen - Fifteen');
  });

  it('should be 30-30 "Thirty - Thirty" when A=30,B=30', function() {
    tennis.PlayerGetScoreA();
    tennis.PlayerGetScoreB();
    expect(tennis.echo()).toEqual('Thirty - Thirty');
  });

});
