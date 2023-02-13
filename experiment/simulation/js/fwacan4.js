	var ctx4 = null;
	var canvas4;
	var x10,y10;
	var count1=0;
    var coordinates1 = new Array();
	var quotient1;
	var quotient2;
	
	function canvas44() {
	canvas4=document.getElementById("mycanvas4"),
	ctx4 = canvas4.getContext('2d'),
	drawGrid4('deep gray', 18,18);
	linedraw4();
}
<!--------------end of axis translation----------->
$(document).ready(function(){
	$("#mycanvas4").click(function(e){
		getPosition4(e);
		pressureweight();
  });
	$("#mycanvas4").mousemove(function(event) {
		var rect = canvas4.getBoundingClientRect();
		x10 = event.clientX - rect.left;
		y10 = event.clientY - rect.top;
		if((x10>=0 && x10<=432) && (y10>=101 && y10<=106)){
			$('#mycanvas4').css('cursor','pointer');
			//console.log(x12+"    "+y12);
		}
	});
});
function getPosition4(event){
     var rect = canvas4.getBoundingClientRect();
      x10 = event.clientX - rect.left;
      y10 = event.clientY - rect.top;
}
function getMousePos4(canvas4, evt) {
    var rect = canvas4.getBoundingClientRect();
    return {
     x10: evt.clientX - (rect.left) ,
     y10: evt.clientY - rect.top ,		
    };
}
<!--------------end of mousepos---------------------->
   function drawGrid4(color, stepx, stepy) 
   {
   ctx4.fillStyle = "white";
   ctx4.lineWidth = 0.5;
   ctx4.strokeStyle = color;
   for (var i =0; i < canvas4.width; i += stepx) {
   ctx4.beginPath();
   ctx4.moveTo(i, 0);
   ctx4.lineTo(i, canvas4.height);
   ctx4.stroke();
   }
   for (var i = 0; i < canvas4.height; i += stepy) {
   ctx4.beginPath();
   ctx4.moveTo(0, i);
   ctx4.lineTo(canvas4.width, i);
   ctx4.stroke();
   
  }
 } 
function linedraw4(){
        ctx4.beginPath();
		ctx4.moveTo(0,0);
		ctx4.lineTo(108,0);
		ctx4.lineTo(216,108);
		ctx4.lineTo(324,0);
		ctx4.lineTo(432,0);
		ctx4.moveTo(0,108);
		ctx4.lineTo(108,108);
		ctx4.lineTo(216,0);
		ctx4.lineTo(324,108);
		ctx4.lineTo(432,108);
        ctx4.lineWidth=2.5;
        ctx4.strokeStyle="black";
		ctx4.stroke();

}
 function pressureweight(){
	 if(((x10>=0 && x10<=432) && (y10>=101 && y10<=106)) && count1<2){
		 //alert(x10);
		// alert(y10);
	    count1++;
		x10 = Math.abs(x10) - 0.5;
		ctx4.fillStyle = "black";
		ctx4.beginPath();
		ctx4.arc(x10, 108, 4, 0, Math.PI * 2, true);
		ctx4.fill();
		
		coordinates1[count1] = x10;
		quotient1 = parseFloat(coordinates1[1]/432).toPrecision(5); //1/432
		quotient2 = parseFloat(coordinates1[2]/432).toPrecision(5); //1/432
 		 //alert(quotient1);
		 //alert(quotient2);
		var mid1 = (coordinates1[1] + coordinates1[2]) / 2;
		ctx4.beginPath();
		ctx4.moveTo(coordinates1[1], 108);
		ctx4.lineTo(mid1,0);
		ctx4.lineTo(coordinates1[2], 108);
		ctx4.fillStyle = "red";
		ctx4.fill();
		ctx4.lineWidth = 1.5;
		ctx4.strokeStyle = "black";
		ctx4.stroke();
			allow4 = true;
			if((allow1 == true && allow2 == true && allow3 == true && allow5 == true && allow6 == true) && (count1==2)) {
				$("#rslt").removeAttr("disabled");	
			}
		 }
	 else{
		 return 0;
	 }
 }
document.getElementById('clr').addEventListener('click', function() {
        ctx4.clearRect(0, 0, mycanvas4.width, mycanvas4.height);
		 drawGrid4('deep gray', 18,18);
		 linedraw4();
		 		document.getElementById("how").disabled=true;
		document.getElementById("rslt").disabled=true;

	//$(".lowerrightlowerSection .howDiv").html("");
 }, false);
