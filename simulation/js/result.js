var perssure,pressureweight;
var temperature,temperatureweight;
var flowrate,flowrateweight;
var pressureweightedaverage,temperatureweightedaverage,flowrateweightedaverage;

function pwa(){
	pressureweightedaverage=(parseFloat(pmin)*parseFloat(quotient1) + parseFloat(pmax)*parseFloat(quotient2))/(parseFloat(quotient1) + parseFloat(quotient2)).toPrecision(3);
	html = "";
	html= "PressureWeightedAverage =" +String(pressureweightedaverage);
	$(".result1").html(html);
	$("#how").removeAttr("disabled");
	$("lowerSection.rsltdiv").html(html);
	
	//alert(pressureweightedaverage);
}
function twa(){
	temperatureweightedaverage=(parseFloat(tmin)*parseFloat(quotient3) + parseFloat(tmax)*parseFloat(quotient4))/(parseFloat(quotient3) + parseFloat(quotient4)).toPrecision(3);
	html = "";
	html= "TemperatureWeightedAverage =" +String(temperatureweightedaverage);
	$(".result2").html(html);
	document.getElementById("how").disabled=false;
		$("lowerSection.rsltdiv").html(html);
	//alert(temperatureweightedaverage);
}
function fwa(){
	flowrateweightedaverage=(parseFloat(fmin)*parseFloat(quotient5) + parseFloat(fmax)*parseFloat(quotient6))/(parseFloat(quotient5) + parseFloat(quotient6)).toPrecision(3);
	html = "";
	html= "FlowrateWeightedAverage =" +String(flowrateweightedaverage);
	$(".result3").html(html);
	document.getElementById("how").disabled=false;
	//alert(flowrateweightedaverage);
		$("lowerSection.rsltdiv").html(html);
}
document.getElementById('clr').addEventListener('click', function() {
document.getElementById("btn1").innerHTML = ""; 
}, false);
