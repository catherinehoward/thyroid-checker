function calculateRangePosition(){

	var hormone = document.getElementById("thyroidhormone").value;
	var amount = document.getElementById("amount").value;
	var rangeBottom = document.getElementById("bottom").value;
  var rangeTop = document.getElementById("top").value;
	var theResult = "";
	var position = false;

	var quarter = (parseFloat(rangeTop) - parseFloat(rangeBottom))/4;
  var firstQuartile = (parseFloat(rangeBottom) + parseFloat(quarter));
	var secondQuartile = firstQuartile + quarter;
	var thirdQuartile = secondQuartile + quarter;
	
	if (amount < rangeBottom){
			theResult = "below range";
			var position = true;
		}
		else if ((amount >= rangeBottom) && (amount < firstQuartile)){
			theResult = "bottom of range";
			var position = true;
		}
		else if ((amount >= firstQuartile) && (amount < thirdQuartile)){
			theResult = "mid range";
			var position = true;
		}
		else if ((amount >= thirdQuartile) && (amount <= rangeTop)){
		  theResult = "optimal";
		  var position = true;
		}
		else if (amount > rangeTop){
		  theResult = "above range";
		  var position = true;
		}
		else {
			exit;
	  }
	if (position){
		document.getElementById("result").innerHTML = "Your " + hormone + " level is " + theResult;
	return theResult;
	}
}



