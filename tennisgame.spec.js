this.scoreA = 0;
this.scoreB = 0;

function Tennies(player){

if(player === "start"){
    return "( " + this.scoreA + " , " + this.scoreB + " )" + "--->" + PlayerGetScore( this.scoreA , this.scoreB);
}

 if(player === 1){
      if(this.scoreA === 30 && this.scoreA === 40){
        this.scoreA+=10;
          return "( " + this.scoreA + " , " + this.scoreB + " )" + "--->" + PlayerGetScore( this.scoreA , this.scoreB);
      }

      if(this.scoreA === 55){

          return PlayerGetScore( this.scoreA , this.scoreB);
      }
      return "( " + this.scoreA + " , " + this.scoreB + " )" + "--->" + PlayerGetScore( this.scoreA , this.scoreB);

  }


  if(player === 2){

      this.scoreB += 15;

      return "( " + this.scoreA + " , " + this.scoreB + " )" + "--->" + PlayerGetScore( this.scoreA , this.scoreB);
  }
}

function PlayerGetScore( playerA , playerB ){

  if( playerA === 0 && playerB === 0){
     return " Love - Love ";
  }

  if( playerA === 0 && playerB === 15){
     return " Love - Fifteen ";
  }

  if( playerA === 0 && playerB === 30){
     return " Love - Forty ";
  }


}
