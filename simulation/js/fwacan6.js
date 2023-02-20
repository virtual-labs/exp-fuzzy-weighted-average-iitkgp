	var ctx6 = null;
	var canvas6;
	var x12,y12;
	var count3=0;
    var coordinates3 = new Array();
	var quotient5;
	var quotient6;

	
	function canvas66() {
	canvas6=document.getElementById("mycanvas6"),
	ctx6 = canvas6.getContext('2d'),
	drawGrid6('deep gray', 18,18);
	linedraw6();
}
<!--------------end of axis translation----------->
$(document).ready(function(){
	$("#mycanvas6").click(function(e){
		getPosition6(e);
		flowrateweight();
	});
	$("#mycanvas6").mousemove(function(event) {
		var rect = canvas6.getBoundingClientRect();
		x12 = event.clientX - rect.left;
		y12 = event.clientY - rect.top;
		if((x12>=0 && x12<=432) && (y12>=101 && y12<=106)){
			$('#mycanvas6').css('cursor','pointer');
			//console.log(x12+"    "+y12);
		}
	});
});

function getPosition6(event){
     var rect = canvas6.getBoundingClientRect();
      x12 = event.clientX - rect.left;
      y12 = event.clientY - rect.top;
}
function getMousePos6(canvas6, evt) {
    var rect = canvas6.getBoundingClientRect();
    return {
     x12: evt.clientX - (rect.left) ,
     y12: evt.clientY - rect.top ,		
    };
}
<!--------------end of mousepos---------------------->
   function drawGrid6(color, stepx, stepy) 
   {
   ctx6.fillStyle = "white";
   ctx6.lineWidth = 0.5;
   ctx6.strokeStyle = color;
   for (var i =0; i < canvas6.width; i += stepx) {
   ctx6.beginPath();
   ctx6.moveTo(i, 0);
   ctx6.lineTo(i, canvas6.height);
   ctx6.stroke();
   }
   for (var i = 0; i < canvas6.height; i += stepy) {
   ctx6.beginPath();
   ctx6.moveTo(0, i);
   ctx6.lineTo(canvas6.width, i);
   ctx6.stroke();
  }
 } 
function linedraw6(){
        ctx6.beginPath();
		ctx6.moveTo(0,0);
		ctx6.lineTo(108,0);
		ctx6.lineTo(216,108);
		ctx6.lineTo(324,0);
		ctx6.lineTo(432,0);
		ctx6.moveTo(0,108);
		ctx6.lineTo(108,108);
		ctx6.lineTo(216,0);
		ctx6.lineTo(324,108);
		ctx6.lineTo(432,108);
        ctx6.lineWidth=2.5;
        ctx6.strokeStyle="black";
		ctx6.stroke();
  }
 function flowrateweight(){
	 if(((x12>=0 && x12<=432) && (y12>=101 && y12<=106)) && count3<2){
		// alert(x10);
		// alert(y10);
	    count3++;
		x12 = Math.abs(x12) - 0.5;
		ctx6.fillStyle = "black";
		ctx6.beginPath();
		ctx6.arc(x12, 108, 4, 0, Math.PI * 2, true);
		ctx6.fill();
		coordinates3[count3] = x12;
		quotient5 = parseFloat(coordinates3[1]/432).toPrecision(5); //1/432
		quotient6 = parseFloat(coordinates3[2]/432).toPrecision(5); //1/432
		var mid3 = (coordinates3[1] + coordinates3[2]) / 2;
		//alert(quotient5);
		//alert(quotient6);
		ctx6.beginPath();
		ctx6.moveTo(coordinates3[1], 108);
		ctx6.lineTo(mid3,0);
		ctx6.lineTo(coordinates3[2], 108);
		ctx6.fillStyle = "#3374FF";
		ctx6.fill();
		ctx6.lineWidth = 1.5;
		ctx6.strokeStyle = "black";
		ctx6.stroke();
			allow6 = true;
			if((allow1 == true && allow2 == true && allow3 == true && allow4 == true && allow5 == true)&& (count3==2)) {
				$("#rslt").removeAttr("disabled");	
			}
		 }
	 else{
		 return 0;
	 }
 }
document.getElementById('clr').addEventListener('click', function() {
        ctx6.clearRect(0, 0, mycanvas6.width, mycanvas6.height);
		 drawGrid6('deep gray', 18,18);
		 linedraw6();
		document.getElementById("how").disabled=true;
		document.getElementById("rslt").disabled=true;

	//$(".lowerrightlowerSection .howDiv").html("");
 }, false);
