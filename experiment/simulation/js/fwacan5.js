	var ctx5 = null;
	var canvas5;
	var x11,y11;
	var count2=0;
    var coordinates2 = new Array();
	var quotient3;
	var quotient4;

	
	function canvas55() {
	canvas5=document.getElementById("mycanvas5"),
	ctx5 = canvas5.getContext('2d'),
	drawGrid5('deep gray', 18,18);
	linedraw5();
}
<!--------------end of axis translation----------->
$(document).ready(function(){
	$("#mycanvas5").click(function(e){
		getPosition5(e);
		tempweight();
	});

	$("#mycanvas5").mousemove(function(event) {
		var rect = canvas5.getBoundingClientRect();
		x11 = event.clientX - rect.left;
		y11 = event.clientY - rect.top;
		if((x11>=0 && x11<=432) && (y11>=101 && y11<=106)){
			$('#mycanvas5').css('cursor','pointer');
			//console.log(x12+"    "+y12);
		}
	});
});
function getPosition5(event){
     var rect = canvas5.getBoundingClientRect();
      x11 = event.clientX - rect.left;
      y11 = event.clientY - rect.top;
}
function getMousePos5(canvas5, evt) {
    var rect = canvas5.getBoundingClientRect();
    return {
     x11: evt.clientX - (rect.left) ,
     y11: evt.clientY - rect.top ,		
    };
}
<!--------------end of mousepos---------------------->
   function drawGrid5(color, stepx, stepy) 
   {
   ctx5.fillStyle = "white";
   ctx5.lineWidth = 0.5;
   ctx5.strokeStyle = color;
   for (var i =0; i < canvas5.width; i += stepx) {
   ctx5.beginPath();
   ctx5.moveTo(i, 0);
   ctx5.lineTo(i, canvas5.height);
   ctx5.stroke();
   }
   for (var i = 0; i < canvas5.height; i += stepy) {
   ctx5.beginPath();
   ctx5.moveTo(0, i);
   ctx5.lineTo(canvas5.width, i);
   ctx5.stroke();
  }
 } 

function linedraw5(){
        ctx5.beginPath();
		ctx5.moveTo(0,0);
		ctx5.lineTo(108,0);
		ctx5.lineTo(216,108);
		ctx5.lineTo(324,0);
		ctx5.lineTo(432,0);
		ctx5.moveTo(0,108);
		ctx5.lineTo(108,108);
		ctx5.lineTo(216,0);
		ctx5.lineTo(324,108);
		ctx5.lineTo(432,108);
        ctx5.lineWidth=2.5;
        ctx5.strokeStyle="black";
		ctx5.stroke();
  }
 function tempweight(){
	 if(((x11>=0 && x11<=432) && (y11>=101 && y11<=106)) && count2<2){
		// alert(x10);
		// alert(y10);
	    count2++;
		x11 = Math.abs(x11) - 0.5;
		ctx5.fillStyle = "black";
		ctx5.beginPath();
		ctx5.arc(x11, 108, 4, 0, Math.PI * 2, true);
		ctx5.fill();
		coordinates2[count2] = x11;
		quotient3 = parseFloat(coordinates2[1]/432).toPrecision(5); //1/432
		quotient4 = parseFloat(coordinates2[2]/432).toPrecision(5); //1/432
		var mid2 = (coordinates2[1] + coordinates2[2]) / 2;
		//alert(quotient3);
		//alert(quotient4);
		ctx5.beginPath();
		ctx5.moveTo(coordinates2[1], 108);
		ctx5.lineTo(mid2,0);
		ctx5.lineTo(coordinates2[2], 108);
		ctx5.fillStyle = "#33FF55";
		ctx5.fill();
		ctx5.lineWidth = 1.5;
		ctx5.strokeStyle = "black";
		ctx5.stroke();
			allow5 = true;
			if((allow1 == true && allow2 == true && allow3 == true && allow4 == true && allow6 == true)&& (count2==2)) {
				$("#rslt").removeAttr("disabled");	
			}
		 }
	 else{
		 return 0;
	 }
 }
document.getElementById('clr').addEventListener('click', function() {
        ctx5.clearRect(0, 0, mycanvas5.width, mycanvas5.height);
		 drawGrid5('deep gray', 18,18);
		 linedraw5();
		 		document.getElementById("how").disabled=true;
		document.getElementById("rslt").disabled=true;

	//$(".lowerrightlowerSection .howDiv").html("");
 }, false);
