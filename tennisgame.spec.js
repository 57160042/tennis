
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

   }


 this.PlayerGetScoreB = fucntion(){

     if(this.ScoreB === 30 ){
               this.ScoreB+=10;
      }
      if(this.ScoreB == 40 ){
               this.ScoreB = 'win';
      }
      else {
                this.ScoreB+=15;
      }

  };




this.echo = function(){

       if( this.ScoreA === 0 && this.ScoreB === 0){
              return " Love - Love ";
        }

        else if( this.ScoreA === 0 && this.ScoreB === 15){
              return " Love - Fifteen ";
        }

        else if( this.ScoreA === 0 && this.ScoreB === 30){
              return " Love - Forty ";
        }

        else if( this.ScoreA === 'win'){
               return " PlayerB Win ";
        }

       else if( this.ScoreA === 15 && this.ScoreB === 0){
               return " Fifteen - Love ";
        }

       else if( this.ScoreA === 30 && this.ScoreB === 0){
                return " Thirty - Love ";
        }

       else if( this.ScoreA === 40 && this.ScoreB === 0){
                return " Forty - Love ";
        }

        else if( this.ScoreA === 15 && this.ScoreB === 15){
                return " Fifteen - Fifteen ";
        }

        else if( this.ScoreA === 30 && this.ScoreB === 30){
                return " Forty - Forty ";
        }

        else if( this.ScoreA === 'win' ){
                return " playerA Win ";
        }
};

}
