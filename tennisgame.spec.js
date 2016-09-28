
function Tennies(player){


      this.scoreA = 0;
      this.scoreB = 0;

 if(player === 1){
      this.scoreA += 15;

      return "( " + this.scoreA + " , " + this.scoreB + " )" + "--->" + Score( this.scoreA , this.scoreB);

  }


  else if(player === 2){

      this.scoreB += 15;

      return "( " + this.scoreA + " , " + this.scoreB + " )" + "--->" + Score( this.scoreA , this.scoreB);
  }
}

function Score( scoreA , scoreB ){

  if( scoreA === 0 && scoreB === 0){
     return " Love - Love ";
  }

  if( scoreA === 0 && scoreB === 15){
     return " Love - Fifteen ";
  }

  if( scoreA === 0 && scoreB === 30){
     return " Love - Forty ";
  }


}
