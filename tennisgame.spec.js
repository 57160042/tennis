
function Tennies(){

  this.ScoreA = 0;
  this.ScoreB = 0;

  this.PlayerGetScoreA = fucntion(){


      if(this.ScoreA === 30 ){
               this.ScoreA+=10;
      }
      if(this.ScoreA == 40 ){
               this.ScoreA = 'win';
      }
      else {
                this.ScoreA+=15;
      }
   };


 this.PlayerGetScoreB = fucntion(){


  };




this.echo = function(){

       if( playerA === 0 && playerB === 0){
              return " Love - Love ";
        }

        else if( playerA === 0 && playerB === 15){
              return " Love - Fifteen ";
        }

        else if( playerA === 0 && playerB === 30){
              return " Love - Forty ";
        }

        else if( playerB === 'win'){
               return " PlayerB Win ";
        }

       else if( playerA === 15 && playerB === 0){
               return " Fifteen - Love ";
        }

       else if( playerA === 30 && playerB === 0){
                return " Thirty - Love ";
        }

       else if( playerA === 40 && playerB === 0){
                return " Forty - Love ";
        }

        else if( playerA === 15 && playerB === 15){
                return " Fifteen - Fifteen ";
        }

        else if( playerA === 30 && playerB === 30){
                return " Forty - Forty ";
        }

        else if( playerA === 'win' ){
                return " playerA Win ";
        }
};

}
