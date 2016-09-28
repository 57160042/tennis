this.scoreA = 0;
this.scoreB = 0;

function Tennies(player){

if(player === "start"){
    return "( " + this.scoreA + " , " + this.scoreB + " )" + "--->" + PlayerGetScore( this.scoreA , this.scoreB);
}

 if(player === 1){
      if(this.scoreA === 30 ){
        this.scoreA+=10;
          return "( " + this.scoreA + " , " + this.scoreB + " )" + "--->" + PlayerGetScore( this.scoreA , this.scoreB);
      }

      if(this.scoreA >= 40 ){
          this.scoreA+=15;
          return PlayerGetScore( this.scoreA , this.scoreB);
      }

      else {
            this.scoreA+=15;
            return "( " + this.scoreA + " , " + this.scoreB + " )" + "--->" + PlayerGetScore( this.scoreA , this.scoreB);
      }

  }


  if(player === 2){

    if(this.scoreB === 30 ){
      this.scoreA+=10;
        return "( " + this.scoreA + " , " + this.scoreB + " )" + "--->" + PlayerGetScore( this.scoreA , this.scoreB);
    }

    if(this.scoreB > 40 ){

        return PlayerGetScore( this.scoreA , this.scoreB);
    }

    else {
          this.scoreB+=15;
          return "( " + this.scoreA + " , " + this.scoreB + " )" + "--->" + PlayerGetScore( this.scoreA , this.scoreB);
    }
  }
}

function PlayerGetScore( playerA , playerB ){

    if( playerA === 0 && playerB === 0){
      return " Love - Love ";
  }
    else if( playerA === 0 && playerB === 15){
      return " Love - Fifteen ";
  }
    else if( playerA === 0 && playerB === 30){
      return " Love - Forty ";
  }
    else if( playerB > 40){
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
  else if( playerA > 40 ){
    return " playerA Win ";
  }

}
