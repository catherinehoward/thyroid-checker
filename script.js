var level = "";
var theResult = "";

function checkHormone(){
  var hormone = document.getElementById("thyroidhormone").value;
  var amount = parseFloat(document.getElementById("amount").value);
  var rangeBottom = parseFloat(document.getElementById("bottom").value);
  var rangeTop = parseFloat(document.getElementById("top").value);
    
	if (hormone !== "TSH"){
		var level = calculateRangePosition(amount,rangeTop,rangeBottom);		
    }
	else{
		var level = calculateTSH(amount,rangeTop,rangeBottom);
    }
	displayResult(hormone, level);	
}

function calculateRangePosition(actual, top, bottom){  
	var quarter = (parseFloat(top) - parseFloat(bottom))/4;
	var firstQuartile = (parseFloat(bottom) + parseFloat(quarter));
	var secondQuartile = firstQuartile + quarter;
	var thirdQuartile = secondQuartile + quarter;
	
	console.log("In calculateRangePosition function");
	
	if (actual < bottom){
			theResult = "below range";
		}
		else if (actual >= bottom && actual < firstQuartile){
			theResult = "bottom of range";
		}
		else if (actual >= firstQuartile && actual < thirdQuartile){
			theResult = "mid range";
		}
		else if (actual >= thirdQuartile && actual <= top){
		  theResult = "optimal";
		}
		else if (actual > top){
		  theResult = "above range";
		}
		else {
			exit;
	    }
		return theResult;
}

function displayResult(hormone,level){
    if (level == "optimal"){
			 /*resultsBox.style.borderColor = "green";*/
			 document.getElementById("results-box").style.visibility = "visible";
			 document.getElementById("result").style.borderColor = "green";
		}
		else
		if (level == "above range" || level == "below range"){
		   document.getElementById("results-box").style.visibility = "visible";
			 document.getElementById("result").style.borderColor = "red";
		}
		else
		if (level == "mid range" || level == "bottom of range"){
			 document.getElementById("results-box").style.visibility = "visible";
			 document.getElementById("result").style.borderColor = "orange";
		}
		
    document.getElementById("result").innerHTML = "Your " + hormone + " level is " + level +".";
}

function calculateTSH(actual, top, bottom){
    console.log("In calculateTSH");
	  /*if(amount <= 0.2){
	   
	}*/
}

function reset (){
  var level = "";
  var theResult = "";
	var hormone = "";
  var amount = null;
  var rangeBottom = null;
  var rangeTop = null;
	var quarter = null;
	var firstQuartile = null;
	var secondQuartile = null;
	var thirdQuartile = null;
	document.getElementById("results-box").style.visibility = "hidden";
}


