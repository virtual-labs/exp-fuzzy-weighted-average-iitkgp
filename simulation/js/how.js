function howpwa(){
	html = "";
	html = "PressureWeightedAverage = " + "(" +(String(pmin) + "*" + String(quotient1)) + " + " + (String(pmax) + "*" +String(quotient2)) + ")" +"/" +  "(" +(String(quotient1) + "+" + String(quotient2)) + ")" + "=" + String(pressureweightedaverage) ;
	//alert(html);
	$(".result1").html(html);
	$(".lowerrightlowerSection .howDiv").html(html);
}
function howtwa(){
	html = "";
	html = "TemperatureWeightedAverage = " + "(" +(String(tmin) + "*" + String(quotient3)) + " + " + (String(tmax) + "*" +String(quotient4)) + ")" + "/" + "(" +(String(quotient3) + "+" + String(quotient4)) + ")" + "=" + String(temperatureweightedaverage);
	//alert(html);
	$(".result2").html(html);
	$(".lowerrightlowerSection .howDiv").html(html);
}
function howfwa(){
	html = "";
	html = "FlowrateWeightedAverage = " + "(" + (String(fmin) + "*" + String(quotient5)) + " + " + (String(fmax) + "*" +String(quotient6)) + ")" +"/" + "(" + (String(quotient5) + "+" + String(quotient6)) + ")" + "=" + String(flowrateweightedaverage);
	//alert(html);
	$(".result3").html(html);
	$(".lowerSection .howDiv").html(html);
}

